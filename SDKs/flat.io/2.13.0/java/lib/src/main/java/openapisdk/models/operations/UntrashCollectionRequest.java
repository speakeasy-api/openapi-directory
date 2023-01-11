package openapisdk.models.operations;



public class UntrashCollectionRequest {
    public UntrashCollectionPathParams pathParams;
    public UntrashCollectionRequest withPathParams(UntrashCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UntrashCollectionSecurity security;
    public UntrashCollectionRequest withSecurity(UntrashCollectionSecurity security) {
        this.security = security;
        return this;
    }
}