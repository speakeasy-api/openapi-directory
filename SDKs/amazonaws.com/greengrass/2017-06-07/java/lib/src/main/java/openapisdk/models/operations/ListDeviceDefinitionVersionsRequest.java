package openapisdk.models.operations;



public class ListDeviceDefinitionVersionsRequest {
    public ListDeviceDefinitionVersionsPathParams pathParams;
    public ListDeviceDefinitionVersionsRequest withPathParams(ListDeviceDefinitionVersionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDeviceDefinitionVersionsQueryParams queryParams;
    public ListDeviceDefinitionVersionsRequest withQueryParams(ListDeviceDefinitionVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDeviceDefinitionVersionsHeaders headers;
    public ListDeviceDefinitionVersionsRequest withHeaders(ListDeviceDefinitionVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}