package openapisdk.models.operations;



public class GetCodeSigningConfigRequest {
    public GetCodeSigningConfigPathParams pathParams;
    public GetCodeSigningConfigRequest withPathParams(GetCodeSigningConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCodeSigningConfigHeaders headers;
    public GetCodeSigningConfigRequest withHeaders(GetCodeSigningConfigHeaders headers) {
        this.headers = headers;
        return this;
    }
}