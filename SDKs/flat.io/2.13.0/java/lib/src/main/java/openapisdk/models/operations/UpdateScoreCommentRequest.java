package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateScoreCommentRequest {
    public UpdateScoreCommentPathParams pathParams;
    public UpdateScoreCommentRequest withPathParams(UpdateScoreCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateScoreCommentQueryParams queryParams;
    public UpdateScoreCommentRequest withQueryParams(UpdateScoreCommentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreCommentUpdate request;
    public UpdateScoreCommentRequest withRequest(openapisdk.models.shared.ScoreCommentUpdate request) {
        this.request = request;
        return this;
    }
    public UpdateScoreCommentSecurity security;
    public UpdateScoreCommentRequest withSecurity(UpdateScoreCommentSecurity security) {
        this.security = security;
        return this;
    }
}