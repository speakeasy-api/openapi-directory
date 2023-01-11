package openapisdk.models.operations;



public class GetPushTemplateRequest {
    public GetPushTemplatePathParams pathParams;
    public GetPushTemplateRequest withPathParams(GetPushTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPushTemplateQueryParams queryParams;
    public GetPushTemplateRequest withQueryParams(GetPushTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPushTemplateHeaders headers;
    public GetPushTemplateRequest withHeaders(GetPushTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}