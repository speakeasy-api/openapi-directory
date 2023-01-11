package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConfigurationRecorderRequest {
    public PutConfigurationRecorderHeaders headers;
    public PutConfigurationRecorderRequest withHeaders(PutConfigurationRecorderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutConfigurationRecorderRequest request;
    public PutConfigurationRecorderRequest withRequest(openapisdk.models.shared.PutConfigurationRecorderRequest request) {
        this.request = request;
        return this;
    }
}