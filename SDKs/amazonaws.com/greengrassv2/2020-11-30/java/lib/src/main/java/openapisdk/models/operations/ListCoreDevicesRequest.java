package openapisdk.models.operations;



public class ListCoreDevicesRequest {
    public ListCoreDevicesQueryParams queryParams;
    public ListCoreDevicesRequest withQueryParams(ListCoreDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListCoreDevicesHeaders headers;
    public ListCoreDevicesRequest withHeaders(ListCoreDevicesHeaders headers) {
        this.headers = headers;
        return this;
    }
}