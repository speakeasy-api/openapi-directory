package openapisdk.models.operations;



public class GetContractIdRequest {
    public GetContractIdPathParams pathParams;
    public GetContractIdRequest withPathParams(GetContractIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetContractIdSecurity security;
    public GetContractIdRequest withSecurity(GetContractIdSecurity security) {
        this.security = security;
        return this;
    }
}