package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendValidationEmailRequest {
    public ResendValidationEmailHeaders headers;
    public ResendValidationEmailRequest withHeaders(ResendValidationEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResendValidationEmailRequest request;
    public ResendValidationEmailRequest withRequest(openapisdk.models.shared.ResendValidationEmailRequest request) {
        this.request = request;
        return this;
    }
}