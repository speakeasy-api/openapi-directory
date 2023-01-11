package openapisdk.models.operations;



public class GetTransferRequest {
    public GetTransferPathParams pathParams;
    public GetTransferRequest withPathParams(GetTransferPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTransferSecurity security;
    public GetTransferRequest withSecurity(GetTransferSecurity security) {
        this.security = security;
        return this;
    }
}