package openapisdk.models.operations;



public class DeleteModelRequest {
    public DeleteModelPathParams pathParams;
    public DeleteModelRequest withPathParams(DeleteModelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteModelHeaders headers;
    public DeleteModelRequest withHeaders(DeleteModelHeaders headers) {
        this.headers = headers;
        return this;
    }
}