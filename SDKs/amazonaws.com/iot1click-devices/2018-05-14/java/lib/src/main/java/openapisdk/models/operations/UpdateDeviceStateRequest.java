package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceStateRequest {
    public UpdateDeviceStatePathParams pathParams;
    public UpdateDeviceStateRequest withPathParams(UpdateDeviceStatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDeviceStateHeaders headers;
    public UpdateDeviceStateRequest withHeaders(UpdateDeviceStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceStateRequestBody request;
    public UpdateDeviceStateRequest withRequest(UpdateDeviceStateRequestBody request) {
        this.request = request;
        return this;
    }
}