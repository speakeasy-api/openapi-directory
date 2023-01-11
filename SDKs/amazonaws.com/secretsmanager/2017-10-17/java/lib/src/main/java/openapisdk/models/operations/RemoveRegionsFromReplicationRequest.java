package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveRegionsFromReplicationRequest {
    public RemoveRegionsFromReplicationHeaders headers;
    public RemoveRegionsFromReplicationRequest withHeaders(RemoveRegionsFromReplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveRegionsFromReplicationRequest request;
    public RemoveRegionsFromReplicationRequest withRequest(openapisdk.models.shared.RemoveRegionsFromReplicationRequest request) {
        this.request = request;
        return this;
    }
}