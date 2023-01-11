package openapisdk.models.operations;



public class MarkScoreCommentUnresolvedRequest {
    public MarkScoreCommentUnresolvedPathParams pathParams;
    public MarkScoreCommentUnresolvedRequest withPathParams(MarkScoreCommentUnresolvedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MarkScoreCommentUnresolvedQueryParams queryParams;
    public MarkScoreCommentUnresolvedRequest withQueryParams(MarkScoreCommentUnresolvedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MarkScoreCommentUnresolvedSecurity security;
    public MarkScoreCommentUnresolvedRequest withSecurity(MarkScoreCommentUnresolvedSecurity security) {
        this.security = security;
        return this;
    }
}