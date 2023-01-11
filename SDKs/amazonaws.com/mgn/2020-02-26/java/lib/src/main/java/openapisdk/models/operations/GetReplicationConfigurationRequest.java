package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplicationConfigurationRequest {
    public GetReplicationConfigurationHeaders headers;
    public GetReplicationConfigurationRequest withHeaders(GetReplicationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetReplicationConfigurationRequestBody request;
    public GetReplicationConfigurationRequest withRequest(GetReplicationConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}