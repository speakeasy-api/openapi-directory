package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundlesIdShareRequest {
    public PostBundlesIdSharePathParams pathParams;
    public PostBundlesIdShareRequest withPathParams(PostBundlesIdSharePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostBundlesIdShareRequestBody request;
    public PostBundlesIdShareRequest withRequest(PostBundlesIdShareRequestBody request) {
        this.request = request;
        return this;
    }
}