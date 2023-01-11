package openapisdk.models.operations;



public class GetUpdateTemplateRequest {
    public GetUpdateTemplateQueryParams queryParams;
    public GetUpdateTemplateRequest withQueryParams(GetUpdateTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUpdateTemplateHeaders headers;
    public GetUpdateTemplateRequest withHeaders(GetUpdateTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}