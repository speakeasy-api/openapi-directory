package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConformancePackComplianceDetailsRequest {
    public GetConformancePackComplianceDetailsQueryParams queryParams;
    public GetConformancePackComplianceDetailsRequest withQueryParams(GetConformancePackComplianceDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetConformancePackComplianceDetailsHeaders headers;
    public GetConformancePackComplianceDetailsRequest withHeaders(GetConformancePackComplianceDetailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetConformancePackComplianceDetailsRequest request;
    public GetConformancePackComplianceDetailsRequest withRequest(openapisdk.models.shared.GetConformancePackComplianceDetailsRequest request) {
        this.request = request;
        return this;
    }
}