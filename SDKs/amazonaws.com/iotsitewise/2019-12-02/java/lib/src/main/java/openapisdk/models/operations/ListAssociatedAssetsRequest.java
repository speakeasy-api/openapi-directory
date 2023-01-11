package openapisdk.models.operations;



public class ListAssociatedAssetsRequest {
    public ListAssociatedAssetsPathParams pathParams;
    public ListAssociatedAssetsRequest withPathParams(ListAssociatedAssetsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAssociatedAssetsQueryParams queryParams;
    public ListAssociatedAssetsRequest withQueryParams(ListAssociatedAssetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssociatedAssetsHeaders headers;
    public ListAssociatedAssetsRequest withHeaders(ListAssociatedAssetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}