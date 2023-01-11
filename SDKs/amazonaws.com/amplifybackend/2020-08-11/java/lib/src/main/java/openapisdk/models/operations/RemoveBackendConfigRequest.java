package openapisdk.models.operations;



public class RemoveBackendConfigRequest {
    public RemoveBackendConfigPathParams pathParams;
    public RemoveBackendConfigRequest withPathParams(RemoveBackendConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveBackendConfigHeaders headers;
    public RemoveBackendConfigRequest withHeaders(RemoveBackendConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}