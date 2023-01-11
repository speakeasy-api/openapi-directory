package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserPoolMfaConfigRequest {
    public GetUserPoolMfaConfigHeaders headers;
    public GetUserPoolMfaConfigRequest withHeaders(GetUserPoolMfaConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetUserPoolMfaConfigRequest request;
    public GetUserPoolMfaConfigRequest withRequest(openapisdk.models.shared.GetUserPoolMfaConfigRequest request) {
        this.request = request;
        return this;
    }
}