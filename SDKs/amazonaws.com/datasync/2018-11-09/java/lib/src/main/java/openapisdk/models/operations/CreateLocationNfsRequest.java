package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationNfsRequest {
    public CreateLocationNfsHeaders headers;
    public CreateLocationNfsRequest withHeaders(CreateLocationNfsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLocationNfsRequest request;
    public CreateLocationNfsRequest withRequest(openapisdk.models.shared.CreateLocationNfsRequest request) {
        this.request = request;
        return this;
    }
}