package openapisdk.models.operations;



public class DeleteScoreFromCollectionRequest {
    public DeleteScoreFromCollectionPathParams pathParams;
    public DeleteScoreFromCollectionRequest withPathParams(DeleteScoreFromCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteScoreFromCollectionQueryParams queryParams;
    public DeleteScoreFromCollectionRequest withQueryParams(DeleteScoreFromCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteScoreFromCollectionSecurity security;
    public DeleteScoreFromCollectionRequest withSecurity(DeleteScoreFromCollectionSecurity security) {
        this.security = security;
        return this;
    }
}