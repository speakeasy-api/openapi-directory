package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCommentRequest {
    public GetCommentHeaders headers;
    public GetCommentRequest withHeaders(GetCommentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCommentInput request;
    public GetCommentRequest withRequest(openapisdk.models.shared.GetCommentInput request) {
        this.request = request;
        return this;
    }
}