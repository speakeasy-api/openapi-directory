package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrailRequest {
    public CreateTrailHeaders headers;
    public CreateTrailRequest withHeaders(CreateTrailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTrailRequest request;
    public CreateTrailRequest withRequest(openapisdk.models.shared.CreateTrailRequest request) {
        this.request = request;
        return this;
    }
}