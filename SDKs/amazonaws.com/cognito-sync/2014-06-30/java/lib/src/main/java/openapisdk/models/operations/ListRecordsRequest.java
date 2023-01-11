package openapisdk.models.operations;



public class ListRecordsRequest {
    public ListRecordsPathParams pathParams;
    public ListRecordsRequest withPathParams(ListRecordsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListRecordsQueryParams queryParams;
    public ListRecordsRequest withQueryParams(ListRecordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListRecordsHeaders headers;
    public ListRecordsRequest withHeaders(ListRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
}