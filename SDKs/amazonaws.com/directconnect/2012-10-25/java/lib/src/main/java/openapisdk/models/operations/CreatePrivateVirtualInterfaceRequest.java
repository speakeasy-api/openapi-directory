package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePrivateVirtualInterfaceRequest {
    public CreatePrivateVirtualInterfaceHeaders headers;
    public CreatePrivateVirtualInterfaceRequest withHeaders(CreatePrivateVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePrivateVirtualInterfaceRequest request;
    public CreatePrivateVirtualInterfaceRequest withRequest(openapisdk.models.shared.CreatePrivateVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}