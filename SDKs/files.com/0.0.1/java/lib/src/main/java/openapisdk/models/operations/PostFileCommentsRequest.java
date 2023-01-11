package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFileCommentsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostFileCommentsRequestBody request;
    public PostFileCommentsRequest withRequest(PostFileCommentsRequestBody request) {
        this.request = request;
        return this;
    }
}