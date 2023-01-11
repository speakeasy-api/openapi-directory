package openapisdk.models.operations;



public class GetConfigRequest {
    public GetConfigPathParams pathParams;
    public GetConfigRequest withPathParams(GetConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetConfigHeaders headers;
    public GetConfigRequest withHeaders(GetConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}