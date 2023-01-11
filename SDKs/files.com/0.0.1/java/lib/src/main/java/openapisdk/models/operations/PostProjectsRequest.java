package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostProjectsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostProjectsRequestBody request;
    public PostProjectsRequest withRequest(PostProjectsRequestBody request) {
        this.request = request;
        return this;
    }
}