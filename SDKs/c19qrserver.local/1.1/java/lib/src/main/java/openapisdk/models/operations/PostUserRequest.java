package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostUserSample request;
    public PostUserRequest withRequest(PostUserSample request) {
        this.request = request;
        return this;
    }
}