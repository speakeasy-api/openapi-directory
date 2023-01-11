package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllocatePrivateVirtualInterfaceRequest {
    public AllocatePrivateVirtualInterfaceHeaders headers;
    public AllocatePrivateVirtualInterfaceRequest withHeaders(AllocatePrivateVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllocatePrivateVirtualInterfaceRequest request;
    public AllocatePrivateVirtualInterfaceRequest withRequest(openapisdk.models.shared.AllocatePrivateVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}