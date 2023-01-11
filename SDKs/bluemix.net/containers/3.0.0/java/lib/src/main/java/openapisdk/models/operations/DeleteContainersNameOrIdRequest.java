package openapisdk.models.operations;



public class DeleteContainersNameOrIdRequest {
    public DeleteContainersNameOrIdPathParams pathParams;
    public DeleteContainersNameOrIdRequest withPathParams(DeleteContainersNameOrIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteContainersNameOrIdQueryParams queryParams;
    public DeleteContainersNameOrIdRequest withQueryParams(DeleteContainersNameOrIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteContainersNameOrIdHeaders headers;
    public DeleteContainersNameOrIdRequest withHeaders(DeleteContainersNameOrIdHeaders headers) {
        this.headers = headers;
        return this;
    }
}