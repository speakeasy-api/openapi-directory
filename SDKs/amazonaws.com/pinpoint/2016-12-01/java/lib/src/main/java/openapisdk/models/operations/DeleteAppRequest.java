package openapisdk.models.operations;



public class DeleteAppRequest {
    public DeleteAppPathParams pathParams;
    public DeleteAppRequest withPathParams(DeleteAppPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteAppHeaders headers;
    public DeleteAppRequest withHeaders(DeleteAppHeaders headers) {
        this.headers = headers;
        return this;
    }
}