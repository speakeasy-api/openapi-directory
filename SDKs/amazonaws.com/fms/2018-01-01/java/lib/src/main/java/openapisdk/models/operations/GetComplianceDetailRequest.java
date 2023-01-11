package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComplianceDetailRequest {
    public GetComplianceDetailHeaders headers;
    public GetComplianceDetailRequest withHeaders(GetComplianceDetailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetComplianceDetailRequest request;
    public GetComplianceDetailRequest withRequest(openapisdk.models.shared.GetComplianceDetailRequest request) {
        this.request = request;
        return this;
    }
}