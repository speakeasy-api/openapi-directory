package openapisdk.models.operations;



public class GetModelTemplateRequest {
    public GetModelTemplatePathParams pathParams;
    public GetModelTemplateRequest withPathParams(GetModelTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetModelTemplateHeaders headers;
    public GetModelTemplateRequest withHeaders(GetModelTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}