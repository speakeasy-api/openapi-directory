package openapisdk.models.operations;



public class DeletePushTemplateRequest {
    public DeletePushTemplatePathParams pathParams;
    public DeletePushTemplateRequest withPathParams(DeletePushTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeletePushTemplateQueryParams queryParams;
    public DeletePushTemplateRequest withQueryParams(DeletePushTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeletePushTemplateHeaders headers;
    public DeletePushTemplateRequest withHeaders(DeletePushTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
}