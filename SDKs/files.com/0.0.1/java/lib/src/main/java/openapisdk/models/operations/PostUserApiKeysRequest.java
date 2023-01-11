package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserApiKeysRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUserApiKeysRequestBody request;
    public PostUserApiKeysRequest withRequest(PostUserApiKeysRequestBody request) {
        this.request = request;
        return this;
    }
}