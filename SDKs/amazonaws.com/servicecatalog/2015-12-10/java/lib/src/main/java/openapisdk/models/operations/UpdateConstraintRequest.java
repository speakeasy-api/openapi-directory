package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConstraintRequest {
    public UpdateConstraintHeaders headers;
    public UpdateConstraintRequest withHeaders(UpdateConstraintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateConstraintInput request;
    public UpdateConstraintRequest withRequest(openapisdk.models.shared.UpdateConstraintInput request) {
        this.request = request;
        return this;
    }
}