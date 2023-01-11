package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComplianceSummaryRequest {
    public GetComplianceSummaryQueryParams queryParams;
    public GetComplianceSummaryRequest withQueryParams(GetComplianceSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetComplianceSummaryHeaders headers;
    public GetComplianceSummaryRequest withHeaders(GetComplianceSummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetComplianceSummaryInput request;
    public GetComplianceSummaryRequest withRequest(openapisdk.models.shared.GetComplianceSummaryInput request) {
        this.request = request;
        return this;
    }
}