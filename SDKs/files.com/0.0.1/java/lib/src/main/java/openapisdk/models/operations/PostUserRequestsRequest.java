package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUserRequestsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUserRequestsRequestBody request;
    public PostUserRequestsRequest withRequest(PostUserRequestsRequestBody request) {
        this.request = request;
        return this;
    }
}