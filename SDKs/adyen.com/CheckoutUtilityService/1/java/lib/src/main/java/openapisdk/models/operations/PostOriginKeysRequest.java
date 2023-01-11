package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOriginKeysRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostOriginKeysRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}