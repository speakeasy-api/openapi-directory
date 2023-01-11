package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePublicVirtualInterfaceRequest {
    public CreatePublicVirtualInterfaceHeaders headers;
    public CreatePublicVirtualInterfaceRequest withHeaders(CreatePublicVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePublicVirtualInterfaceRequest request;
    public CreatePublicVirtualInterfaceRequest withRequest(openapisdk.models.shared.CreatePublicVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}