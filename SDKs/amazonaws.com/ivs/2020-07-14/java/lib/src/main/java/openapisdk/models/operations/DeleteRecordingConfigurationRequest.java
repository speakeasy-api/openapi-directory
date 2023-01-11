package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRecordingConfigurationRequest {
    public DeleteRecordingConfigurationHeaders headers;
    public DeleteRecordingConfigurationRequest withHeaders(DeleteRecordingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteRecordingConfigurationRequestBody request;
    public DeleteRecordingConfigurationRequest withRequest(DeleteRecordingConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}