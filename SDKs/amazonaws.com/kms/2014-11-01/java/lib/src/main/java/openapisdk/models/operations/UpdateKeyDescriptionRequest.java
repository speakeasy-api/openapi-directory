package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateKeyDescriptionRequest {
    public UpdateKeyDescriptionHeaders headers;
    public UpdateKeyDescriptionRequest withHeaders(UpdateKeyDescriptionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateKeyDescriptionRequest request;
    public UpdateKeyDescriptionRequest withRequest(openapisdk.models.shared.UpdateKeyDescriptionRequest request) {
        this.request = request;
        return this;
    }
}