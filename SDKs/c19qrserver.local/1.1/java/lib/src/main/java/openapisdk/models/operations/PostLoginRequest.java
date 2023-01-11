package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLoginRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostLoginSample request;
    public PostLoginRequest withRequest(PostLoginSample request) {
        this.request = request;
        return this;
    }
}