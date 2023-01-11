package openapisdk.models.operations;



public class GetSmsTemplateRequest {
    public GetSmsTemplatePathParams pathParams;
    public GetSmsTemplateRequest withPathParams(GetSmsTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSmsTemplateQueryParams queryParams;
    public GetSmsTemplateRequest withQueryParams(GetSmsTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSmsTemplateHeaders headers;
    public GetSmsTemplateRequest withHeaders(GetSmsTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}