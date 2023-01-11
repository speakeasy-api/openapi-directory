package openapisdk.models.operations;



public class FunctionsListTagsRequest {
    public FunctionsListTagsPathParams pathParams;
    public FunctionsListTagsRequest withPathParams(FunctionsListTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FunctionsListTagsQueryParams queryParams;
    public FunctionsListTagsRequest withQueryParams(FunctionsListTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FunctionsListTagsSecurity security;
    public FunctionsListTagsRequest withSecurity(FunctionsListTagsSecurity security) {
        this.security = security;
        return this;
    }
}