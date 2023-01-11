package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LostPasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public LostPasswordRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}