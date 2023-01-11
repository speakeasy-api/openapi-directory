package openapisdk.models.operations;



public class GetDeviceRequest {
    public GetDevicePathParams pathParams;
    public GetDeviceRequest withPathParams(GetDevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetDeviceHeaders headers;
    public GetDeviceRequest withHeaders(GetDeviceHeaders headers) {
        this.headers = headers;
        return this;
    }
}