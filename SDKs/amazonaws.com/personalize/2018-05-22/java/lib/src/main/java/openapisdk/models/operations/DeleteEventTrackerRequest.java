package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEventTrackerRequest {
    public DeleteEventTrackerHeaders headers;
    public DeleteEventTrackerRequest withHeaders(DeleteEventTrackerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteEventTrackerRequest request;
    public DeleteEventTrackerRequest withRequest(openapisdk.models.shared.DeleteEventTrackerRequest request) {
        this.request = request;
        return this;
    }
}