package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSiteApiKeysRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostSiteApiKeysRequestBody request;
    public PostSiteApiKeysRequest withRequest(PostSiteApiKeysRequestBody request) {
        this.request = request;
        return this;
    }
}