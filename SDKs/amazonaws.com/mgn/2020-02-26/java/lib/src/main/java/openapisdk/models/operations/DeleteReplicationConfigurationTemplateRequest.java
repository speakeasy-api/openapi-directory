package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReplicationConfigurationTemplateRequest {
    public DeleteReplicationConfigurationTemplateHeaders headers;
    public DeleteReplicationConfigurationTemplateRequest withHeaders(DeleteReplicationConfigurationTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteReplicationConfigurationTemplateRequestBody request;
    public DeleteReplicationConfigurationTemplateRequest withRequest(DeleteReplicationConfigurationTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}