package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllocatePublicVirtualInterfaceRequest {
    public AllocatePublicVirtualInterfaceHeaders headers;
    public AllocatePublicVirtualInterfaceRequest withHeaders(AllocatePublicVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllocatePublicVirtualInterfaceRequest request;
    public AllocatePublicVirtualInterfaceRequest withRequest(openapisdk.models.shared.AllocatePublicVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}