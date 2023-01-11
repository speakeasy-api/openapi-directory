package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostRequestRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}