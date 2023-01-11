package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetLogRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public String request;
    public SetLogRequest withRequest(String request) {
        this.request = request;
        return this;
    }
}