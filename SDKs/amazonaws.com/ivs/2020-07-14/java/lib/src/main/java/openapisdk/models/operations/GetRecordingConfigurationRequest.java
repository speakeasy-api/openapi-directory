package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordingConfigurationRequest {
    public GetRecordingConfigurationHeaders headers;
    public GetRecordingConfigurationRequest withHeaders(GetRecordingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetRecordingConfigurationRequestBody request;
    public GetRecordingConfigurationRequest withRequest(GetRecordingConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}