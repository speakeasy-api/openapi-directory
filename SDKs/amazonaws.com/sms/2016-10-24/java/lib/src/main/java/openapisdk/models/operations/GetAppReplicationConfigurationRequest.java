package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppReplicationConfigurationRequest {
    public GetAppReplicationConfigurationHeaders headers;
    public GetAppReplicationConfigurationRequest withHeaders(GetAppReplicationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAppReplicationConfigurationRequest request;
    public GetAppReplicationConfigurationRequest withRequest(openapisdk.models.shared.GetAppReplicationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}