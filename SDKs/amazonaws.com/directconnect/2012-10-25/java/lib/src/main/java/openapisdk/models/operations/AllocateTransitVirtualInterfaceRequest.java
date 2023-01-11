package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AllocateTransitVirtualInterfaceRequest {
    public AllocateTransitVirtualInterfaceHeaders headers;
    public AllocateTransitVirtualInterfaceRequest withHeaders(AllocateTransitVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AllocateTransitVirtualInterfaceRequest request;
    public AllocateTransitVirtualInterfaceRequest withRequest(openapisdk.models.shared.AllocateTransitVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}