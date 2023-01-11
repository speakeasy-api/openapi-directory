package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteVirtualInterfaceRequest {
    public DeleteVirtualInterfaceHeaders headers;
    public DeleteVirtualInterfaceRequest withHeaders(DeleteVirtualInterfaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteVirtualInterfaceRequest request;
    public DeleteVirtualInterfaceRequest withRequest(openapisdk.models.shared.DeleteVirtualInterfaceRequest request) {
        this.request = request;
        return this;
    }
}