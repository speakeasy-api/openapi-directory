package openapisdk.models.operations;



public class PrivateCollectionDetailsRequest {
    public PrivateCollectionDetailsPathParams pathParams;
    public PrivateCollectionDetailsRequest withPathParams(PrivateCollectionDetailsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionDetailsSecurity security;
    public PrivateCollectionDetailsRequest withSecurity(PrivateCollectionDetailsSecurity security) {
        this.security = security;
        return this;
    }
}