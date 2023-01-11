package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDeviceDefinitionRequest {
    public CreateDeviceDefinitionHeaders headers;
    public CreateDeviceDefinitionRequest withHeaders(CreateDeviceDefinitionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateDeviceDefinitionRequestBody request;
    public CreateDeviceDefinitionRequest withRequest(CreateDeviceDefinitionRequestBody request) {
        this.request = request;
        return this;
    }
}