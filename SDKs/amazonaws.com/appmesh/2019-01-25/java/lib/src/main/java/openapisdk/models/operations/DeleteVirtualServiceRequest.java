package openapisdk.models.operations;



public class DeleteVirtualServiceRequest {
    public DeleteVirtualServicePathParams pathParams;
    public DeleteVirtualServiceRequest withPathParams(DeleteVirtualServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVirtualServiceQueryParams queryParams;
    public DeleteVirtualServiceRequest withQueryParams(DeleteVirtualServiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteVirtualServiceHeaders headers;
    public DeleteVirtualServiceRequest withHeaders(DeleteVirtualServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
}