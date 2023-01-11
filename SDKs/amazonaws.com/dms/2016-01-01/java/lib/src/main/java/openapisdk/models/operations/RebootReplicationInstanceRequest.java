package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RebootReplicationInstanceRequest {
    public RebootReplicationInstanceHeaders headers;
    public RebootReplicationInstanceRequest withHeaders(RebootReplicationInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RebootReplicationInstanceMessage request;
    public RebootReplicationInstanceRequest withRequest(openapisdk.models.shared.RebootReplicationInstanceMessage request) {
        this.request = request;
        return this;
    }
}