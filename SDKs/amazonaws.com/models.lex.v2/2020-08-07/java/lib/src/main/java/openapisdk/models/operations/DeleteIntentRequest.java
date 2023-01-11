package openapisdk.models.operations;



public class DeleteIntentRequest {
    public DeleteIntentPathParams pathParams;
    public DeleteIntentRequest withPathParams(DeleteIntentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteIntentHeaders headers;
    public DeleteIntentRequest withHeaders(DeleteIntentHeaders headers) {
        this.headers = headers;
        return this;
    }
}