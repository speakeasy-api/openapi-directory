package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InvokeDeviceMethodRequest {
    public InvokeDeviceMethodPathParams pathParams;
    public InvokeDeviceMethodRequest withPathParams(InvokeDeviceMethodPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public InvokeDeviceMethodHeaders headers;
    public InvokeDeviceMethodRequest withHeaders(InvokeDeviceMethodHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public InvokeDeviceMethodRequestBody request;
    public InvokeDeviceMethodRequest withRequest(InvokeDeviceMethodRequestBody request) {
        this.request = request;
        return this;
    }
}