package openapisdk.models.operations;



public class DeleteSmsTemplateRequest {
    public DeleteSmsTemplatePathParams pathParams;
    public DeleteSmsTemplateRequest withPathParams(DeleteSmsTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteSmsTemplateQueryParams queryParams;
    public DeleteSmsTemplateRequest withQueryParams(DeleteSmsTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteSmsTemplateHeaders headers;
    public DeleteSmsTemplateRequest withHeaders(DeleteSmsTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}