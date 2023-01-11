package openapisdk.models.operations;



public class DeleteVpcLinkRequest {
    public DeleteVpcLinkPathParams pathParams;
    public DeleteVpcLinkRequest withPathParams(DeleteVpcLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVpcLinkHeaders headers;
    public DeleteVpcLinkRequest withHeaders(DeleteVpcLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
}