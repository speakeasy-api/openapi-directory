package openapisdk.models.operations;



public class PrivateCollectionReserveHandleRequest {
    public PrivateCollectionReserveHandlePathParams pathParams;
    public PrivateCollectionReserveHandleRequest withPathParams(PrivateCollectionReserveHandlePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivateCollectionReserveHandleSecurity security;
    public PrivateCollectionReserveHandleRequest withSecurity(PrivateCollectionReserveHandleSecurity security) {
        this.security = security;
        return this;
    }
}