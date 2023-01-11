package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutReplicationConfigurationRequest {
    public PutReplicationConfigurationHeaders headers;
    public PutReplicationConfigurationRequest withHeaders(PutReplicationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutReplicationConfigurationRequest request;
    public PutReplicationConfigurationRequest withRequest(openapisdk.models.shared.PutReplicationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}