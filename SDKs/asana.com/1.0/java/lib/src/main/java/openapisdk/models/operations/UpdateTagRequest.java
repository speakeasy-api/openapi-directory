package openapisdk.models.operations;



public class UpdateTagRequest {
    public UpdateTagPathParams pathParams;
    public UpdateTagRequest withPathParams(UpdateTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTagQueryParams queryParams;
    public UpdateTagRequest withQueryParams(UpdateTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}