package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundlesRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostBundlesRequestBody request;
    public PostBundlesRequest withRequest(PostBundlesRequestBody request) {
        this.request = request;
        return this;
    }
}