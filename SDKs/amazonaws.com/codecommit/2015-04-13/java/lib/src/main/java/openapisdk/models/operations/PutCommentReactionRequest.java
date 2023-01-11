package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCommentReactionRequest {
    public PutCommentReactionHeaders headers;
    public PutCommentReactionRequest withHeaders(PutCommentReactionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutCommentReactionInput request;
    public PutCommentReactionRequest withRequest(openapisdk.models.shared.PutCommentReactionInput request) {
        this.request = request;
        return this;
    }
}