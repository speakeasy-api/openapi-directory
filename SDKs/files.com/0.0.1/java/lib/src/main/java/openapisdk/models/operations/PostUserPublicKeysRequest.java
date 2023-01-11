package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserPublicKeysRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUserPublicKeysRequestBody request;
    public PostUserPublicKeysRequest withRequest(PostUserPublicKeysRequestBody request) {
        this.request = request;
        return this;
    }
}