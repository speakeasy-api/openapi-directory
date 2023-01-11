package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFilesPathRequest {
    public PostFilesPathPathParams pathParams;
    public PostFilesPathRequest withPathParams(PostFilesPathPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostFilesPathRequestBody request;
    public PostFilesPathRequest withRequest(PostFilesPathRequestBody request) {
        this.request = request;
        return this;
    }
}