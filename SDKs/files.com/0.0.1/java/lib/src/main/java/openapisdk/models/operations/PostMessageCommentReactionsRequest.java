package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMessageCommentReactionsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostMessageCommentReactionsRequestBody request;
    public PostMessageCommentReactionsRequest withRequest(PostMessageCommentReactionsRequestBody request) {
        this.request = request;
        return this;
    }
}