package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationSmbRequest {
    public CreateLocationSmbHeaders headers;
    public CreateLocationSmbRequest withHeaders(CreateLocationSmbHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLocationSmbRequest request;
    public CreateLocationSmbRequest withRequest(openapisdk.models.shared.CreateLocationSmbRequest request) {
        this.request = request;
        return this;
    }
}