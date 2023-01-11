package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPublicVirtualInterfaceRequest {
    public ConfirmPublicVirtualInterfaceHeaders headers;
    public ConfirmPublicVirtualInterfaceRequest withHeaders(ConfirmPublicVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmPublicVirtualInterfaceRequest request;
    public ConfirmPublicVirtualInterfaceRequest withRequest(openapisdk.models.shared.ConfirmPublicVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}