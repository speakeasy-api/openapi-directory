package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostGroupsRequestBody request;
    public PostGroupsRequest withRequest(PostGroupsRequestBody request) {
        this.request = request;
        return this;
    }
}