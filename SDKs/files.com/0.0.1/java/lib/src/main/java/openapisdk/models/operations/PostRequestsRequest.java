package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRequestsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostRequestsRequestBody request;
    public PostRequestsRequest withRequest(PostRequestsRequestBody request) {
        this.request = request;
        return this;
    }
}