package openapisdk.models.operations;



public class DeleteConfigRequest {
    public DeleteConfigPathParams pathParams;
    public DeleteConfigRequest withPathParams(DeleteConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteConfigHeaders headers;
    public DeleteConfigRequest withHeaders(DeleteConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}