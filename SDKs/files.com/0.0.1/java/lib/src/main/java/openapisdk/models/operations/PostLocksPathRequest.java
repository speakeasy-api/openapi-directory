package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLocksPathRequest {
    public PostLocksPathPathParams pathParams;
    public PostLocksPathRequest withPathParams(PostLocksPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostLocksPathRequestBody request;
    public PostLocksPathRequest withRequest(PostLocksPathRequestBody request) {
        this.request = request;
        return this;
    }
}