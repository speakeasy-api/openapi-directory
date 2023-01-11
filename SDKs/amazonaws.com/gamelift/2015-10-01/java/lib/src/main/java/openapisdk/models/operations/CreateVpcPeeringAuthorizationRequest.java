package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVpcPeeringAuthorizationRequest {
    public CreateVpcPeeringAuthorizationHeaders headers;
    public CreateVpcPeeringAuthorizationRequest withHeaders(CreateVpcPeeringAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateVpcPeeringAuthorizationInput request;
    public CreateVpcPeeringAuthorizationRequest withRequest(openapisdk.models.shared.CreateVpcPeeringAuthorizationInput request) {
        this.request = request;
        return this;
    }
}