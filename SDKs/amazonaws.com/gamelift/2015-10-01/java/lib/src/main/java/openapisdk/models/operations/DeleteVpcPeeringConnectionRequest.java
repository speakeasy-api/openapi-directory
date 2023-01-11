package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVpcPeeringConnectionRequest {
    public DeleteVpcPeeringConnectionHeaders headers;
    public DeleteVpcPeeringConnectionRequest withHeaders(DeleteVpcPeeringConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteVpcPeeringConnectionInput request;
    public DeleteVpcPeeringConnectionRequest withRequest(openapisdk.models.shared.DeleteVpcPeeringConnectionInput request) {
        this.request = request;
        return this;
    }
}