package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsCreateCommentRequest {
    public GistsCreateCommentPathParams pathParams;
    public GistsCreateCommentRequest withPathParams(GistsCreateCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GistsCreateCommentRequestBody request;
    public GistsCreateCommentRequest withRequest(GistsCreateCommentRequestBody request) {
        this.request = request;
        return this;
    }
}