package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSizeConstraintSetRequest {
    public DeleteSizeConstraintSetHeaders headers;
    public DeleteSizeConstraintSetRequest withHeaders(DeleteSizeConstraintSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSizeConstraintSetRequest request;
    public DeleteSizeConstraintSetRequest withRequest(openapisdk.models.shared.DeleteSizeConstraintSetRequest request) {
        this.request = request;
        return this;
    }
}