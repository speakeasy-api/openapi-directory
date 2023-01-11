package openapisdk.models.operations;



public class DeleteStoryRequest {
    public DeleteStoryPathParams pathParams;
    public DeleteStoryRequest withPathParams(DeleteStoryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteStoryQueryParams queryParams;
    public DeleteStoryRequest withQueryParams(DeleteStoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}