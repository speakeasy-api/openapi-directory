package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActivateUserAccountRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public ActivateUserAccountRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}