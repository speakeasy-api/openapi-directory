package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyReplicationInstanceRequest {
    public ModifyReplicationInstanceHeaders headers;
    public ModifyReplicationInstanceRequest withHeaders(ModifyReplicationInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyReplicationInstanceMessage request;
    public ModifyReplicationInstanceRequest withRequest(openapisdk.models.shared.ModifyReplicationInstanceMessage request) {
        this.request = request;
        return this;
    }
}