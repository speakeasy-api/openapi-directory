package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartConfigurationRecorderRequest {
    public StartConfigurationRecorderHeaders headers;
    public StartConfigurationRecorderRequest withHeaders(StartConfigurationRecorderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartConfigurationRecorderRequest request;
    public StartConfigurationRecorderRequest withRequest(openapisdk.models.shared.StartConfigurationRecorderRequest request) {
        this.request = request;
        return this;
    }
}