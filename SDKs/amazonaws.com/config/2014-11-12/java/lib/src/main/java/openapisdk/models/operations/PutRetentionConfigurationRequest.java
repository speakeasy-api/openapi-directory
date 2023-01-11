package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRetentionConfigurationRequest {
    public PutRetentionConfigurationHeaders headers;
    public PutRetentionConfigurationRequest withHeaders(PutRetentionConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutRetentionConfigurationRequest request;
    public PutRetentionConfigurationRequest withRequest(openapisdk.models.shared.PutRetentionConfigurationRequest request) {
        this.request = request;
        return this;
    }
}