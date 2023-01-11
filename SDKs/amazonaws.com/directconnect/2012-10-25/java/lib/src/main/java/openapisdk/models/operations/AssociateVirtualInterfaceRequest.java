package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateVirtualInterfaceRequest {
    public AssociateVirtualInterfaceHeaders headers;
    public AssociateVirtualInterfaceRequest withHeaders(AssociateVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateVirtualInterfaceRequest request;
    public AssociateVirtualInterfaceRequest withRequest(openapisdk.models.shared.AssociateVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}