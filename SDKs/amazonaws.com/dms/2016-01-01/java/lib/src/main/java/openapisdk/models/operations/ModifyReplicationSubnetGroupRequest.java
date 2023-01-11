package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyReplicationSubnetGroupRequest {
    public ModifyReplicationSubnetGroupHeaders headers;
    public ModifyReplicationSubnetGroupRequest withHeaders(ModifyReplicationSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyReplicationSubnetGroupMessage request;
    public ModifyReplicationSubnetGroupRequest withRequest(openapisdk.models.shared.ModifyReplicationSubnetGroupMessage request) {
        this.request = request;
        return this;
    }
}