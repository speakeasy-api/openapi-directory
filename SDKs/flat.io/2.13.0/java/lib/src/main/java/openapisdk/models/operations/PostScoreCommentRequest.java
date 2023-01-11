package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostScoreCommentRequest {
    public PostScoreCommentPathParams pathParams;
    public PostScoreCommentRequest withPathParams(PostScoreCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostScoreCommentQueryParams queryParams;
    public PostScoreCommentRequest withQueryParams(PostScoreCommentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScoreCommentCreation request;
    public PostScoreCommentRequest withRequest(openapisdk.models.shared.ScoreCommentCreation request) {
        this.request = request;
        return this;
    }
    public PostScoreCommentSecurity security;
    public PostScoreCommentRequest withSecurity(PostScoreCommentSecurity security) {
        this.security = security;
        return this;
    }
}