package openapisdk.models.operations;



public class GetVpcLinkRequest {
    public GetVpcLinkPathParams pathParams;
    public GetVpcLinkRequest withPathParams(GetVpcLinkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetVpcLinkHeaders headers;
    public GetVpcLinkRequest withHeaders(GetVpcLinkHeaders headers) {
        this.headers = headers;
        return this;
    }
}