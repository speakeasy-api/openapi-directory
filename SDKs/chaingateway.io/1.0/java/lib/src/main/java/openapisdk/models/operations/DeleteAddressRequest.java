package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAddressRequest {
    public DeleteAddressHeaders headers;
    public DeleteAddressRequest withHeaders(DeleteAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAddressRequest request;
    public DeleteAddressRequest withRequest(openapisdk.models.shared.DeleteAddressRequest request) {
        this.request = request;
        return this;
    }
}