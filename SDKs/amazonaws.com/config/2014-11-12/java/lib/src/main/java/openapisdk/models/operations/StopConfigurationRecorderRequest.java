package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopConfigurationRecorderRequest {
    public StopConfigurationRecorderHeaders headers;
    public StopConfigurationRecorderRequest withHeaders(StopConfigurationRecorderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopConfigurationRecorderRequest request;
    public StopConfigurationRecorderRequest withRequest(openapisdk.models.shared.StopConfigurationRecorderRequest request) {
        this.request = request;
        return this;
    }
}