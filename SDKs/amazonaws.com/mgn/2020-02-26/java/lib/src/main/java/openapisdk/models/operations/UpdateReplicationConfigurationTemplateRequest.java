package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReplicationConfigurationTemplateRequest {
    public UpdateReplicationConfigurationTemplateHeaders headers;
    public UpdateReplicationConfigurationTemplateRequest withHeaders(UpdateReplicationConfigurationTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateReplicationConfigurationTemplateRequestBody request;
    public UpdateReplicationConfigurationTemplateRequest withRequest(UpdateReplicationConfigurationTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}