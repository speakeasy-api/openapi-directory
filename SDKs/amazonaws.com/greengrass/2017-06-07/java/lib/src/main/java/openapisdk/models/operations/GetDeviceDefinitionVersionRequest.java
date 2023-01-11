package openapisdk.models.operations;



public class GetDeviceDefinitionVersionRequest {
    public GetDeviceDefinitionVersionPathParams pathParams;
    public GetDeviceDefinitionVersionRequest withPathParams(GetDeviceDefinitionVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeviceDefinitionVersionQueryParams queryParams;
    public GetDeviceDefinitionVersionRequest withQueryParams(GetDeviceDefinitionVersionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDeviceDefinitionVersionHeaders headers;
    public GetDeviceDefinitionVersionRequest withHeaders(GetDeviceDefinitionVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
}