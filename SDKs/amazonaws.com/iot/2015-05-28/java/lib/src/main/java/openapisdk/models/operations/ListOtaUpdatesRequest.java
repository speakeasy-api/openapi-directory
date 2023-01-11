package openapisdk.models.operations;



public class ListOtaUpdatesRequest {
    public ListOtaUpdatesQueryParams queryParams;
    public ListOtaUpdatesRequest withQueryParams(ListOtaUpdatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListOtaUpdatesHeaders headers;
    public ListOtaUpdatesRequest withHeaders(ListOtaUpdatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}