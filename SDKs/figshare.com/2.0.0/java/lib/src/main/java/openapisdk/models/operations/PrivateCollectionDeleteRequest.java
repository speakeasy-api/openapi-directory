package openapisdk.models.operations;



public class PrivateCollectionDeleteRequest {
    public PrivateCollectionDeletePathParams pathParams;
    public PrivateCollectionDeleteRequest withPathParams(PrivateCollectionDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionDeleteSecurity security;
    public PrivateCollectionDeleteRequest withSecurity(PrivateCollectionDeleteSecurity security) {
        this.security = security;
        return this;
    }
}