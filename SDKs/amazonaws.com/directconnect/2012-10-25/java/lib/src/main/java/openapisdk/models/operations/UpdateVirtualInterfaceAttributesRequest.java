package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVirtualInterfaceAttributesRequest {
    public UpdateVirtualInterfaceAttributesHeaders headers;
    public UpdateVirtualInterfaceAttributesRequest withHeaders(UpdateVirtualInterfaceAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateVirtualInterfaceAttributesRequest request;
    public UpdateVirtualInterfaceAttributesRequest withRequest(openapisdk.models.shared.UpdateVirtualInterfaceAttributesRequest request) {
        this.request = request;
        return this;
    }
}