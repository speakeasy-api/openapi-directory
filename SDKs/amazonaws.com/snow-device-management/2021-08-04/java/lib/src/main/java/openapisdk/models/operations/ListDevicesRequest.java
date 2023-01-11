package openapisdk.models.operations;



public class ListDevicesRequest {
    public ListDevicesQueryParams queryParams;
    public ListDevicesRequest withQueryParams(ListDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDevicesHeaders headers;
    public ListDevicesRequest withHeaders(ListDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
}