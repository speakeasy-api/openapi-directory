package openapisdk.models.operations;



public class GetEmailTemplateRequest {
    public GetEmailTemplatePathParams pathParams;
    public GetEmailTemplateRequest withPathParams(GetEmailTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetEmailTemplateQueryParams queryParams;
    public GetEmailTemplateRequest withQueryParams(GetEmailTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetEmailTemplateHeaders headers;
    public GetEmailTemplateRequest withHeaders(GetEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}