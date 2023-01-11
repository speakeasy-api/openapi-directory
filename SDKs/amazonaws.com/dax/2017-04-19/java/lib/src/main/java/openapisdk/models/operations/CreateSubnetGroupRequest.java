package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubnetGroupRequest {
    public CreateSubnetGroupHeaders headers;
    public CreateSubnetGroupRequest withHeaders(CreateSubnetGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSubnetGroupRequest request;
    public CreateSubnetGroupRequest withRequest(openapisdk.models.shared.CreateSubnetGroupRequest request) {
        this.request = request;
        return this;
    }
}