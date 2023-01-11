package openapisdk.models.operations;



public class DeleteEmailTemplateRequest {
    public DeleteEmailTemplatePathParams pathParams;
    public DeleteEmailTemplateRequest withPathParams(DeleteEmailTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteEmailTemplateQueryParams queryParams;
    public DeleteEmailTemplateRequest withQueryParams(DeleteEmailTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteEmailTemplateHeaders headers;
    public DeleteEmailTemplateRequest withHeaders(DeleteEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}