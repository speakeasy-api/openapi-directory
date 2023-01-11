package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessageCommentsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostMessageCommentsRequestBody request;
    public PostMessageCommentsRequest withRequest(PostMessageCommentsRequestBody request) {
        this.request = request;
        return this;
    }
}