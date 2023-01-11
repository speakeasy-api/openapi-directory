package openapisdk.models.operations;



public class GetBlockIdRequest {
    public GetBlockIdPathParams pathParams;
    public GetBlockIdRequest withPathParams(GetBlockIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetBlockIdSecurity security;
    public GetBlockIdRequest withSecurity(GetBlockIdSecurity security) {
        this.security = security;
        return this;
    }
}