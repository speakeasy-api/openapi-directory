package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateReplicationSubnetGroupRequest {
    public CreateReplicationSubnetGroupHeaders headers;
    public CreateReplicationSubnetGroupRequest withHeaders(CreateReplicationSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateReplicationSubnetGroupMessage request;
    public CreateReplicationSubnetGroupRequest withRequest(openapisdk.models.shared.CreateReplicationSubnetGroupMessage request) {
        this.request = request;
        return this;
    }
}