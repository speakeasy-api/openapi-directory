package openapisdk.models.operations;



public class DisassociateResourceRequest {
    public DisassociateResourcePathParams pathParams;
    public DisassociateResourceRequest withPathParams(DisassociateResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisassociateResourceHeaders headers;
    public DisassociateResourceRequest withHeaders(DisassociateResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}