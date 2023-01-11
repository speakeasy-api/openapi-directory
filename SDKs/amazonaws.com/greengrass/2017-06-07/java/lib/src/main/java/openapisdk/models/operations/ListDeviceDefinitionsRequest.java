package openapisdk.models.operations;



public class ListDeviceDefinitionsRequest {
    public ListDeviceDefinitionsQueryParams queryParams;
    public ListDeviceDefinitionsRequest withQueryParams(ListDeviceDefinitionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeviceDefinitionsHeaders headers;
    public ListDeviceDefinitionsRequest withHeaders(ListDeviceDefinitionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}