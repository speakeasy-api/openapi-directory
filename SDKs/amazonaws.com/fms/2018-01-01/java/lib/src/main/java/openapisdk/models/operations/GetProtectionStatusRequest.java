package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProtectionStatusRequest {
    public GetProtectionStatusHeaders headers;
    public GetProtectionStatusRequest withHeaders(GetProtectionStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetProtectionStatusRequest request;
    public GetProtectionStatusRequest withRequest(openapisdk.models.shared.GetProtectionStatusRequest request) {
        this.request = request;
        return this;
    }
}