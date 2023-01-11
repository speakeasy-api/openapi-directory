package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetUserPoolMfaConfigRequest {
    public SetUserPoolMfaConfigHeaders headers;
    public SetUserPoolMfaConfigRequest withHeaders(SetUserPoolMfaConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetUserPoolMfaConfigRequest request;
    public SetUserPoolMfaConfigRequest withRequest(openapisdk.models.shared.SetUserPoolMfaConfigRequest request) {
        this.request = request;
        return this;
    }
}