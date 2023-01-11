package openapisdk.models.operations;



public class DeleteCollectionRequest {
    public DeleteCollectionPathParams pathParams;
    public DeleteCollectionRequest withPathParams(DeleteCollectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteCollectionSecurity security;
    public DeleteCollectionRequest withSecurity(DeleteCollectionSecurity security) {
        this.security = security;
        return this;
    }
}