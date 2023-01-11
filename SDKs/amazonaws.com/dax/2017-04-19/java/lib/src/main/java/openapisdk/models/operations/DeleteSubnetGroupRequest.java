package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSubnetGroupRequest {
    public DeleteSubnetGroupHeaders headers;
    public DeleteSubnetGroupRequest withHeaders(DeleteSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSubnetGroupRequest request;
    public DeleteSubnetGroupRequest withRequest(openapisdk.models.shared.DeleteSubnetGroupRequest request) {
        this.request = request;
        return this;
    }
}