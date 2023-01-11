package openapisdk.models.operations;



public class GetBlockchainIdRequest {
    public GetBlockchainIdPathParams pathParams;
    public GetBlockchainIdRequest withPathParams(GetBlockchainIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBlockchainIdSecurity security;
    public GetBlockchainIdRequest withSecurity(GetBlockchainIdSecurity security) {
        this.security = security;
        return this;
    }
}