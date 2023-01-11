package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSubnetGroupRequest {
    public UpdateSubnetGroupHeaders headers;
    public UpdateSubnetGroupRequest withHeaders(UpdateSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSubnetGroupRequest request;
    public UpdateSubnetGroupRequest withRequest(openapisdk.models.shared.UpdateSubnetGroupRequest request) {
        this.request = request;
        return this;
    }
}