package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSizeConstraintSetRequest {
    public UpdateSizeConstraintSetHeaders headers;
    public UpdateSizeConstraintSetRequest withHeaders(UpdateSizeConstraintSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateSizeConstraintSetRequest request;
    public UpdateSizeConstraintSetRequest withRequest(openapisdk.models.shared.UpdateSizeConstraintSetRequest request) {
        this.request = request;
        return this;
    }
}