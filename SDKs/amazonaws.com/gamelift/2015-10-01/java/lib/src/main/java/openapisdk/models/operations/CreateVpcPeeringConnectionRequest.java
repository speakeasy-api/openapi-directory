package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVpcPeeringConnectionRequest {
    public CreateVpcPeeringConnectionHeaders headers;
    public CreateVpcPeeringConnectionRequest withHeaders(CreateVpcPeeringConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateVpcPeeringConnectionInput request;
    public CreateVpcPeeringConnectionRequest withRequest(openapisdk.models.shared.CreateVpcPeeringConnectionInput request) {
        this.request = request;
        return this;
    }
}