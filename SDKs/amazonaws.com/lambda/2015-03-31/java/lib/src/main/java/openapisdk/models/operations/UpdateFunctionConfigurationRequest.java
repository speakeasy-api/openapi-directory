package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionConfigurationRequest {
    public UpdateFunctionConfigurationPathParams pathParams;
    public UpdateFunctionConfigurationRequest withPathParams(UpdateFunctionConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateFunctionConfigurationHeaders headers;
    public UpdateFunctionConfigurationRequest withHeaders(UpdateFunctionConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFunctionConfigurationRequestBody request;
    public UpdateFunctionConfigurationRequest withRequest(UpdateFunctionConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}