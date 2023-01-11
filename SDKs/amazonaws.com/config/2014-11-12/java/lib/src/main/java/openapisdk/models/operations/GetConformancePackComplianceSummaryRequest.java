package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConformancePackComplianceSummaryRequest {
    public GetConformancePackComplianceSummaryQueryParams queryParams;
    public GetConformancePackComplianceSummaryRequest withQueryParams(GetConformancePackComplianceSummaryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConformancePackComplianceSummaryHeaders headers;
    public GetConformancePackComplianceSummaryRequest withHeaders(GetConformancePackComplianceSummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetConformancePackComplianceSummaryRequest request;
    public GetConformancePackComplianceSummaryRequest withRequest(openapisdk.models.shared.GetConformancePackComplianceSummaryRequest request) {
        this.request = request;
        return this;
    }
}