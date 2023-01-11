package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePrimaryEmailAddressRequest {
    public UpdatePrimaryEmailAddressHeaders headers;
    public UpdatePrimaryEmailAddressRequest withHeaders(UpdatePrimaryEmailAddressHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePrimaryEmailAddressRequest request;
    public UpdatePrimaryEmailAddressRequest withRequest(openapisdk.models.shared.UpdatePrimaryEmailAddressRequest request) {
        this.request = request;
        return this;
    }
}