package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRetentionConfigurationRequest {
    public DeleteRetentionConfigurationHeaders headers;
    public DeleteRetentionConfigurationRequest withHeaders(DeleteRetentionConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRetentionConfigurationRequest request;
    public DeleteRetentionConfigurationRequest withRequest(openapisdk.models.shared.DeleteRetentionConfigurationRequest request) {
        this.request = request;
        return this;
    }
}