package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAppReplicationConfigurationRequest {
    public PutAppReplicationConfigurationHeaders headers;
    public PutAppReplicationConfigurationRequest withHeaders(PutAppReplicationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAppReplicationConfigurationRequest request;
    public PutAppReplicationConfigurationRequest withRequest(openapisdk.models.shared.PutAppReplicationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}