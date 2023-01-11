package openapisdk.models.operations;



public class DeleteTagRequest {
    public DeleteTagPathParams pathParams;
    public DeleteTagRequest withPathParams(DeleteTagPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTagQueryParams queryParams;
    public DeleteTagRequest withQueryParams(DeleteTagQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}