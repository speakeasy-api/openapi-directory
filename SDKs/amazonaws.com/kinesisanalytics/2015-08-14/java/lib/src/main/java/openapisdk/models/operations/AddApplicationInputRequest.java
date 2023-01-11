package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddApplicationInputRequest {
    public AddApplicationInputHeaders headers;
    public AddApplicationInputRequest withHeaders(AddApplicationInputHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddApplicationInputRequest request;
    public AddApplicationInputRequest withRequest(openapisdk.models.shared.AddApplicationInputRequest request) {
        this.request = request;
        return this;
    }
}