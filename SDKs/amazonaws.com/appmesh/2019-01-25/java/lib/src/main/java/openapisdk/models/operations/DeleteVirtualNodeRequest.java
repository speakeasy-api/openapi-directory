package openapisdk.models.operations;



public class DeleteVirtualNodeRequest {
    public DeleteVirtualNodePathParams pathParams;
    public DeleteVirtualNodeRequest withPathParams(DeleteVirtualNodePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteVirtualNodeQueryParams queryParams;
    public DeleteVirtualNodeRequest withQueryParams(DeleteVirtualNodeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteVirtualNodeHeaders headers;
    public DeleteVirtualNodeRequest withHeaders(DeleteVirtualNodeHeaders headers) {
        this.headers = headers;
        return this;
    }
}