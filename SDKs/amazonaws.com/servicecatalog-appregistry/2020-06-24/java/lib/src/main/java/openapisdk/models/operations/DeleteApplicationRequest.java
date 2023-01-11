package openapisdk.models.operations;



public class DeleteApplicationRequest {
    public DeleteApplicationPathParams pathParams;
    public DeleteApplicationRequest withPathParams(DeleteApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApplicationHeaders headers;
    public DeleteApplicationRequest withHeaders(DeleteApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
}