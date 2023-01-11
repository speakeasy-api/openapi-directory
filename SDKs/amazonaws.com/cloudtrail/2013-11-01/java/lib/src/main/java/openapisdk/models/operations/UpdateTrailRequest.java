package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrailRequest {
    public UpdateTrailHeaders headers;
    public UpdateTrailRequest withHeaders(UpdateTrailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTrailRequest request;
    public UpdateTrailRequest withRequest(openapisdk.models.shared.UpdateTrailRequest request) {
        this.request = request;
        return this;
    }
}