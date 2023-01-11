package openapisdk.models.operations;



public class ListDetectorsRequest {
    public ListDetectorsPathParams pathParams;
    public ListDetectorsRequest withPathParams(ListDetectorsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDetectorsQueryParams queryParams;
    public ListDetectorsRequest withQueryParams(ListDetectorsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDetectorsHeaders headers;
    public ListDetectorsRequest withHeaders(ListDetectorsHeaders headers) {
        this.headers = headers;
        return this;
    }
}