package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorkerConfigurationRequest {
    public CreateWorkerConfigurationHeaders headers;
    public CreateWorkerConfigurationRequest withHeaders(CreateWorkerConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWorkerConfigurationRequestBody request;
    public CreateWorkerConfigurationRequest withRequest(CreateWorkerConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}