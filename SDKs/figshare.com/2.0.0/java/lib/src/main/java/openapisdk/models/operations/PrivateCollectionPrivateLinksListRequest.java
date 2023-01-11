package openapisdk.models.operations;



public class PrivateCollectionPrivateLinksListRequest {
    public PrivateCollectionPrivateLinksListPathParams pathParams;
    public PrivateCollectionPrivateLinksListRequest withPathParams(PrivateCollectionPrivateLinksListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionPrivateLinksListSecurity security;
    public PrivateCollectionPrivateLinksListRequest withSecurity(PrivateCollectionPrivateLinksListSecurity security) {
        this.security = security;
        return this;
    }
}