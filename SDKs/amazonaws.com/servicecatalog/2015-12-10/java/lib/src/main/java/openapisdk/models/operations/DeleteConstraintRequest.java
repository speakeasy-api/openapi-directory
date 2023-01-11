package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConstraintRequest {
    public DeleteConstraintHeaders headers;
    public DeleteConstraintRequest withHeaders(DeleteConstraintHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteConstraintInput request;
    public DeleteConstraintRequest withRequest(openapisdk.models.shared.DeleteConstraintInput request) {
        this.request = request;
        return this;
    }
}