package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmPrivateVirtualInterfaceRequest {
    public ConfirmPrivateVirtualInterfaceHeaders headers;
    public ConfirmPrivateVirtualInterfaceRequest withHeaders(ConfirmPrivateVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConfirmPrivateVirtualInterfaceRequest request;
    public ConfirmPrivateVirtualInterfaceRequest withRequest(openapisdk.models.shared.ConfirmPrivateVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}