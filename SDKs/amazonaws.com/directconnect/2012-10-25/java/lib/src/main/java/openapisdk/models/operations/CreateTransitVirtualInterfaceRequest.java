package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTransitVirtualInterfaceRequest {
    public CreateTransitVirtualInterfaceHeaders headers;
    public CreateTransitVirtualInterfaceRequest withHeaders(CreateTransitVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTransitVirtualInterfaceRequest request;
    public CreateTransitVirtualInterfaceRequest withRequest(openapisdk.models.shared.CreateTransitVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}