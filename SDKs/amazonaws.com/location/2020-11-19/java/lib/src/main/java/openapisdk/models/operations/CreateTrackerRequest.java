package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTrackerRequest {
    public CreateTrackerHeaders headers;
    public CreateTrackerRequest withHeaders(CreateTrackerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTrackerRequestBody request;
    public CreateTrackerRequest withRequest(CreateTrackerRequestBody request) {
        this.request = request;
        return this;
    }
}