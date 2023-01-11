package openapisdk.models.operations;



public class GetScoreCommentsRequest {
    public GetScoreCommentsPathParams pathParams;
    public GetScoreCommentsRequest withPathParams(GetScoreCommentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetScoreCommentsQueryParams queryParams;
    public GetScoreCommentsRequest withQueryParams(GetScoreCommentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetScoreCommentsSecurity security;
    public GetScoreCommentsRequest withSecurity(GetScoreCommentsSecurity security) {
        this.security = security;
        return this;
    }
}