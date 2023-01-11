package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddAccountNewAccount request;
    public AddAccountRequest withRequest(AddAccountNewAccount request) {
        this.request = request;
        return this;
    }
}