package openapisdk.models.operations;



public class PrivateCollectionReserveDoiRequest {
    public PrivateCollectionReserveDoiPathParams pathParams;
    public PrivateCollectionReserveDoiRequest withPathParams(PrivateCollectionReserveDoiPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionReserveDoiSecurity security;
    public PrivateCollectionReserveDoiRequest withSecurity(PrivateCollectionReserveDoiSecurity security) {
        this.security = security;
        return this;
    }
}