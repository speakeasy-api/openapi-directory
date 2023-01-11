package openapisdk.models.operations;



public class ListApiKeysRequest {
    public ListApiKeysPathParams pathParams;
    public ListApiKeysRequest withPathParams(ListApiKeysPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListApiKeysQueryParams queryParams;
    public ListApiKeysRequest withQueryParams(ListApiKeysQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListApiKeysHeaders headers;
    public ListApiKeysRequest withHeaders(ListApiKeysHeaders headers) {
        this.headers = headers;
        return this;
    }
}