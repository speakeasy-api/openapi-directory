package openapisdk.models.operations;



public class GetResourceDefinitionRequest {
    public GetResourceDefinitionPathParams pathParams;
    public GetResourceDefinitionRequest withPathParams(GetResourceDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetResourceDefinitionHeaders headers;
    public GetResourceDefinitionRequest withHeaders(GetResourceDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
}