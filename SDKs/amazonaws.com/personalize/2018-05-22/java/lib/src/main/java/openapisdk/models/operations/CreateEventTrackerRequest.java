package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEventTrackerRequest {
    public CreateEventTrackerHeaders headers;
    public CreateEventTrackerRequest withHeaders(CreateEventTrackerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEventTrackerRequest request;
    public CreateEventTrackerRequest withRequest(openapisdk.models.shared.CreateEventTrackerRequest request) {
        this.request = request;
        return this;
    }
}