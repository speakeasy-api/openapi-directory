package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComplianceSummaryByResourceTypeRequest {
    public GetComplianceSummaryByResourceTypeHeaders headers;
    public GetComplianceSummaryByResourceTypeRequest withHeaders(GetComplianceSummaryByResourceTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetComplianceSummaryByResourceTypeRequest request;
    public GetComplianceSummaryByResourceTypeRequest withRequest(openapisdk.models.shared.GetComplianceSummaryByResourceTypeRequest request) {
        this.request = request;
        return this;
    }
}