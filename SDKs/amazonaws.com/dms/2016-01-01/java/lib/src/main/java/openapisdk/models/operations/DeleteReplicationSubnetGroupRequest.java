package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteReplicationSubnetGroupRequest {
    public DeleteReplicationSubnetGroupHeaders headers;
    public DeleteReplicationSubnetGroupRequest withHeaders(DeleteReplicationSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteReplicationSubnetGroupMessage request;
    public DeleteReplicationSubnetGroupRequest withRequest(openapisdk.models.shared.DeleteReplicationSubnetGroupMessage request) {
        this.request = request;
        return this;
    }
}