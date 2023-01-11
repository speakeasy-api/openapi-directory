package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCommentRequest {
    public UpdateCommentHeaders headers;
    public UpdateCommentRequest withHeaders(UpdateCommentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateCommentInput request;
    public UpdateCommentRequest withRequest(openapisdk.models.shared.UpdateCommentInput request) {
        this.request = request;
        return this;
    }
}