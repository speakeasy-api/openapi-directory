package openapisdk.models.operations;



public class ListPartsRequest {
    public ListPartsPathParams pathParams;
    public ListPartsRequest withPathParams(ListPartsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListPartsQueryParams queryParams;
    public ListPartsRequest withQueryParams(ListPartsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPartsHeaders headers;
    public ListPartsRequest withHeaders(ListPartsHeaders headers) {
        this.headers = headers;
        return this;
    }
}