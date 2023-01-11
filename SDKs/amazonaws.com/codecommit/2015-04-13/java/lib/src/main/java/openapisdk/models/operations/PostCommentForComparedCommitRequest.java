package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCommentForComparedCommitRequest {
    public PostCommentForComparedCommitHeaders headers;
    public PostCommentForComparedCommitRequest withHeaders(PostCommentForComparedCommitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostCommentForComparedCommitInput request;
    public PostCommentForComparedCommitRequest withRequest(openapisdk.models.shared.PostCommentForComparedCommitInput request) {
        this.request = request;
        return this;
    }
}