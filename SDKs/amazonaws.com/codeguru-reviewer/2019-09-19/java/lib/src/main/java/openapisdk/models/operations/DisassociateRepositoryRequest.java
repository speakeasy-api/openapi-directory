package openapisdk.models.operations;



public class DisassociateRepositoryRequest {
    public DisassociateRepositoryPathParams pathParams;
    public DisassociateRepositoryRequest withPathParams(DisassociateRepositoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisassociateRepositoryHeaders headers;
    public DisassociateRepositoryRequest withHeaders(DisassociateRepositoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}