package openapisdk.models.operations;



public class ListDeviceResourcesRequest {
    public ListDeviceResourcesPathParams pathParams;
    public ListDeviceResourcesRequest withPathParams(ListDeviceResourcesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDeviceResourcesQueryParams queryParams;
    public ListDeviceResourcesRequest withQueryParams(ListDeviceResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeviceResourcesHeaders headers;
    public ListDeviceResourcesRequest withHeaders(ListDeviceResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
}