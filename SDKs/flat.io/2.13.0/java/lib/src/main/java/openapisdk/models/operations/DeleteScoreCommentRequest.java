package openapisdk.models.operations;



public class DeleteScoreCommentRequest {
    public DeleteScoreCommentPathParams pathParams;
    public DeleteScoreCommentRequest withPathParams(DeleteScoreCommentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteScoreCommentQueryParams queryParams;
    public DeleteScoreCommentRequest withQueryParams(DeleteScoreCommentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteScoreCommentSecurity security;
    public DeleteScoreCommentRequest withSecurity(DeleteScoreCommentSecurity security) {
        this.security = security;
        return this;
    }
}