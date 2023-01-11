package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendActivationCodeRequest {
    public SendActivationCodeHeaders headers;
    public SendActivationCodeRequest withHeaders(SendActivationCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SendActivationCodeRequest request;
    public SendActivationCodeRequest withRequest(openapisdk.models.shared.SendActivationCodeRequest request) {
        this.request = request;
        return this;
    }
}