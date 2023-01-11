package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddApplicationOutputRequest {
    public AddApplicationOutputHeaders headers;
    public AddApplicationOutputRequest withHeaders(AddApplicationOutputHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddApplicationOutputRequest request;
    public AddApplicationOutputRequest withRequest(openapisdk.models.shared.AddApplicationOutputRequest request) {
        this.request = request;
        return this;
    }
}