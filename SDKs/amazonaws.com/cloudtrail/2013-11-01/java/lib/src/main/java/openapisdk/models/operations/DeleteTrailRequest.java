package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTrailRequest {
    public DeleteTrailHeaders headers;
    public DeleteTrailRequest withHeaders(DeleteTrailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTrailRequest request;
    public DeleteTrailRequest withRequest(openapisdk.models.shared.DeleteTrailRequest request) {
        this.request = request;
        return this;
    }
}