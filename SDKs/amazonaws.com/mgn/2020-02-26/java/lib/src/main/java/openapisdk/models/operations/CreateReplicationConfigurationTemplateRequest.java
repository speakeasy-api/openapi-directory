package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplicationConfigurationTemplateRequest {
    public CreateReplicationConfigurationTemplateHeaders headers;
    public CreateReplicationConfigurationTemplateRequest withHeaders(CreateReplicationConfigurationTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateReplicationConfigurationTemplateRequestBody request;
    public CreateReplicationConfigurationTemplateRequest withRequest(CreateReplicationConfigurationTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}