package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignRequest {
    public SignHeaders headers;
    public SignRequest withHeaders(SignHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SignRequest request;
    public SignRequest withRequest(openapisdk.models.shared.SignRequest request) {
        this.request = request;
        return this;
    }
}