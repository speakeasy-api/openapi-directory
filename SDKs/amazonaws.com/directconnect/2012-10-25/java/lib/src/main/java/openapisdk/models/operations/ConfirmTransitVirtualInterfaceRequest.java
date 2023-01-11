package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmTransitVirtualInterfaceRequest {
    public ConfirmTransitVirtualInterfaceHeaders headers;
    public ConfirmTransitVirtualInterfaceRequest withHeaders(ConfirmTransitVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmTransitVirtualInterfaceRequest request;
    public ConfirmTransitVirtualInterfaceRequest withRequest(openapisdk.models.shared.ConfirmTransitVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}