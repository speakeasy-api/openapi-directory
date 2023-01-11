package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserAttributesRequest {
    public UpdateUserAttributesHeaders headers;
    public UpdateUserAttributesRequest withHeaders(UpdateUserAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateUserAttributesRequest request;
    public UpdateUserAttributesRequest withRequest(openapisdk.models.shared.UpdateUserAttributesRequest request) {
        this.request = request;
        return this;
    }
}