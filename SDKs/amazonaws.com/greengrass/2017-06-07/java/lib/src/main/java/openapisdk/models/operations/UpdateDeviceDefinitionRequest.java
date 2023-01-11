package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceDefinitionRequest {
    public UpdateDeviceDefinitionPathParams pathParams;
    public UpdateDeviceDefinitionRequest withPathParams(UpdateDeviceDefinitionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateDeviceDefinitionHeaders headers;
    public UpdateDeviceDefinitionRequest withHeaders(UpdateDeviceDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceDefinitionRequestBody request;
    public UpdateDeviceDefinitionRequest withRequest(UpdateDeviceDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}