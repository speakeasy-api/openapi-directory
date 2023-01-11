package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationInputProcessingConfigurationRequest {
    public DeleteApplicationInputProcessingConfigurationHeaders headers;
    public DeleteApplicationInputProcessingConfigurationRequest withHeaders(DeleteApplicationInputProcessingConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteApplicationInputProcessingConfigurationRequest request;
    public DeleteApplicationInputProcessingConfigurationRequest withRequest(openapisdk.models.shared.DeleteApplicationInputProcessingConfigurationRequest request) {
        this.request = request;
        return this;
    }
}