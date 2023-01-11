package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCommentContentRequest {
    public DeleteCommentContentHeaders headers;
    public DeleteCommentContentRequest withHeaders(DeleteCommentContentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteCommentContentInput request;
    public DeleteCommentContentRequest withRequest(openapisdk.models.shared.DeleteCommentContentInput request) {
        this.request = request;
        return this;
    }
}