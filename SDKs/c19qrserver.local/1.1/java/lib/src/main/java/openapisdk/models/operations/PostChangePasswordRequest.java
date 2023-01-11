package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostChangePasswordRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostChangePasswordSample request;
    public PostChangePasswordRequest withRequest(PostChangePasswordSample request) {
        this.request = request;
        return this;
    }
}