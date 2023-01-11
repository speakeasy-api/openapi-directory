package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommentReplyRequest {
    public PostCommentReplyHeaders headers;
    public PostCommentReplyRequest withHeaders(PostCommentReplyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostCommentReplyInput request;
    public PostCommentReplyRequest withRequest(openapisdk.models.shared.PostCommentReplyInput request) {
        this.request = request;
        return this;
    }
}