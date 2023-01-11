package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNewCardRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNewCardNewCard request;
    public CreateNewCardRequest withRequest(CreateNewCardNewCard request) {
        this.request = request;
        return this;
    }
}