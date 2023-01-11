package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPublicKeysRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostPublicKeysRequestBody request;
    public PostPublicKeysRequest withRequest(PostPublicKeysRequestBody request) {
        this.request = request;
        return this;
    }
}