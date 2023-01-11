package openapisdk.models.operations;



public class ListTemplateVersionsRequest {
    public ListTemplateVersionsPathParams pathParams;
    public ListTemplateVersionsRequest withPathParams(ListTemplateVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTemplateVersionsQueryParams queryParams;
    public ListTemplateVersionsRequest withQueryParams(ListTemplateVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTemplateVersionsHeaders headers;
    public ListTemplateVersionsRequest withHeaders(ListTemplateVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}