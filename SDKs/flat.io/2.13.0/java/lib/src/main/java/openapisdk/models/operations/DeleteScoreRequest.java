package openapisdk.models.operations;



public class DeleteScoreRequest {
    public DeleteScorePathParams pathParams;
    public DeleteScoreRequest withPathParams(DeleteScorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteScoreQueryParams queryParams;
    public DeleteScoreRequest withQueryParams(DeleteScoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteScoreSecurity security;
    public DeleteScoreRequest withSecurity(DeleteScoreSecurity security) {
        this.security = security;
        return this;
    }
}