package openapisdk.models.operations;



public class DeleteAddonRequest {
    public DeleteAddonPathParams pathParams;
    public DeleteAddonRequest withPathParams(DeleteAddonPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAddonQueryParams queryParams;
    public DeleteAddonRequest withQueryParams(DeleteAddonQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteAddonHeaders headers;
    public DeleteAddonRequest withHeaders(DeleteAddonHeaders headers) {
        this.headers = headers;
        return this;
    }
}