package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationEfsRequest {
    public CreateLocationEfsHeaders headers;
    public CreateLocationEfsRequest withHeaders(CreateLocationEfsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLocationEfsRequest request;
    public CreateLocationEfsRequest withRequest(openapisdk.models.shared.CreateLocationEfsRequest request) {
        this.request = request;
        return this;
    }
}