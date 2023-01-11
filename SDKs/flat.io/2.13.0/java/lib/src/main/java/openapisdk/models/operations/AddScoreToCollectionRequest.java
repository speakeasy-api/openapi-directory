package openapisdk.models.operations;



public class AddScoreToCollectionRequest {
    public AddScoreToCollectionPathParams pathParams;
    public AddScoreToCollectionRequest withPathParams(AddScoreToCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddScoreToCollectionQueryParams queryParams;
    public AddScoreToCollectionRequest withQueryParams(AddScoreToCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AddScoreToCollectionSecurity security;
    public AddScoreToCollectionRequest withSecurity(AddScoreToCollectionSecurity security) {
        this.security = security;
        return this;
    }
}