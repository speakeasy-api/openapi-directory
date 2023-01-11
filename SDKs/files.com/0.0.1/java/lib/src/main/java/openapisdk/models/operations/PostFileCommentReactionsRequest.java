package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFileCommentReactionsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostFileCommentReactionsRequestBody request;
    public PostFileCommentReactionsRequest withRequest(PostFileCommentReactionsRequestBody request) {
        this.request = request;
        return this;
    }
}