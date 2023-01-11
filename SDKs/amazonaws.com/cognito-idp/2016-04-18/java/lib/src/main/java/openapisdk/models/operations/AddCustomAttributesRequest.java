package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddCustomAttributesRequest {
    public AddCustomAttributesHeaders headers;
    public AddCustomAttributesRequest withHeaders(AddCustomAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddCustomAttributesRequest request;
    public AddCustomAttributesRequest withRequest(openapisdk.models.shared.AddCustomAttributesRequest request) {
        this.request = request;
        return this;
    }
}