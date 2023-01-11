package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateReplicationConfigurationRequest {
    public UpdateReplicationConfigurationHeaders headers;
    public UpdateReplicationConfigurationRequest withHeaders(UpdateReplicationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateReplicationConfigurationRequestBody request;
    public UpdateReplicationConfigurationRequest withRequest(UpdateReplicationConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}