package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApiKeysRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostApiKeysRequestBody request;
    public PostApiKeysRequest withRequest(PostApiKeysRequestBody request) {
        this.request = request;
        return this;
    }
}