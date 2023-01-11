package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConfigurationRecorderRequest {
    public DeleteConfigurationRecorderHeaders headers;
    public DeleteConfigurationRecorderRequest withHeaders(DeleteConfigurationRecorderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConfigurationRecorderRequest request;
    public DeleteConfigurationRecorderRequest withRequest(openapisdk.models.shared.DeleteConfigurationRecorderRequest request) {
        this.request = request;
        return this;
    }
}