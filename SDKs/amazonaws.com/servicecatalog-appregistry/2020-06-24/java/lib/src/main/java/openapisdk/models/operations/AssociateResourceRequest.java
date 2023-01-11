package openapisdk.models.operations;



public class AssociateResourceRequest {
    public AssociateResourcePathParams pathParams;
    public AssociateResourceRequest withPathParams(AssociateResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AssociateResourceHeaders headers;
    public AssociateResourceRequest withHeaders(AssociateResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}