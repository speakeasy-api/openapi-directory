package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRecordingConfigurationRequest {
    public CreateRecordingConfigurationHeaders headers;
    public CreateRecordingConfigurationRequest withHeaders(CreateRecordingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateRecordingConfigurationRequestBody request;
    public CreateRecordingConfigurationRequest withRequest(CreateRecordingConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}