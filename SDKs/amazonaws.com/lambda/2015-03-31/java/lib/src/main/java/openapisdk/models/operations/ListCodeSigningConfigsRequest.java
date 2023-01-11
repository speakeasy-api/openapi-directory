package openapisdk.models.operations;



public class ListCodeSigningConfigsRequest {
    public ListCodeSigningConfigsQueryParams queryParams;
    public ListCodeSigningConfigsRequest withQueryParams(ListCodeSigningConfigsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCodeSigningConfigsHeaders headers;
    public ListCodeSigningConfigsRequest withHeaders(ListCodeSigningConfigsHeaders headers) {
        this.headers = headers;
        return this;
    }
}