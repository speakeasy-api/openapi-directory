package openapisdk.models.operations;



public class GetCollectionRequest {
    public GetCollectionPathParams pathParams;
    public GetCollectionRequest withPathParams(GetCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCollectionQueryParams queryParams;
    public GetCollectionRequest withQueryParams(GetCollectionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCollectionSecurity security;
    public GetCollectionRequest withSecurity(GetCollectionSecurity security) {
        this.security = security;
        return this;
    }
}