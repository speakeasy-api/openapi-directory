package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsUpdateCommentRequest {
    public GistsUpdateCommentPathParams pathParams;
    public GistsUpdateCommentRequest withPathParams(GistsUpdateCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GistsUpdateCommentRequestBody request;
    public GistsUpdateCommentRequest withRequest(GistsUpdateCommentRequestBody request) {
        this.request = request;
        return this;
    }
}