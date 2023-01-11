package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppReplicationConfigurationRequest {
    public DeleteAppReplicationConfigurationHeaders headers;
    public DeleteAppReplicationConfigurationRequest withHeaders(DeleteAppReplicationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAppReplicationConfigurationRequest request;
    public DeleteAppReplicationConfigurationRequest withRequest(openapisdk.models.shared.DeleteAppReplicationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}