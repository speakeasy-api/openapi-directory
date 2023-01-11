package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComplianceDetailsByResourceRequest {
    public GetComplianceDetailsByResourceQueryParams queryParams;
    public GetComplianceDetailsByResourceRequest withQueryParams(GetComplianceDetailsByResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetComplianceDetailsByResourceHeaders headers;
    public GetComplianceDetailsByResourceRequest withHeaders(GetComplianceDetailsByResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetComplianceDetailsByResourceRequest request;
    public GetComplianceDetailsByResourceRequest withRequest(openapisdk.models.shared.GetComplianceDetailsByResourceRequest request) {
        this.request = request;
        return this;
    }
}