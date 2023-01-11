package openapisdk.models.operations;



public class MarkScoreCommentResolvedRequest {
    public MarkScoreCommentResolvedPathParams pathParams;
    public MarkScoreCommentResolvedRequest withPathParams(MarkScoreCommentResolvedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MarkScoreCommentResolvedQueryParams queryParams;
    public MarkScoreCommentResolvedRequest withQueryParams(MarkScoreCommentResolvedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MarkScoreCommentResolvedSecurity security;
    public MarkScoreCommentResolvedRequest withSecurity(MarkScoreCommentResolvedSecurity security) {
        this.security = security;
        return this;
    }
}