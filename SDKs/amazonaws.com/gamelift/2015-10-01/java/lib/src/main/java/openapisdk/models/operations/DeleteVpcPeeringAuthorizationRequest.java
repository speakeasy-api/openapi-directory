package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVpcPeeringAuthorizationRequest {
    public DeleteVpcPeeringAuthorizationHeaders headers;
    public DeleteVpcPeeringAuthorizationRequest withHeaders(DeleteVpcPeeringAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteVpcPeeringAuthorizationInput request;
    public DeleteVpcPeeringAuthorizationRequest withRequest(openapisdk.models.shared.DeleteVpcPeeringAuthorizationInput request) {
        this.request = request;
        return this;
    }
}