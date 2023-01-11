package openapisdk.models.operations;



public class PrivateCollectionAuthorsListRequest {
    public PrivateCollectionAuthorsListPathParams pathParams;
    public PrivateCollectionAuthorsListRequest withPathParams(PrivateCollectionAuthorsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionAuthorsListSecurity security;
    public PrivateCollectionAuthorsListRequest withSecurity(PrivateCollectionAuthorsListSecurity security) {
        this.security = security;
        return this;
    }
}