package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSizeConstraintSetRequest {
    public CreateSizeConstraintSetHeaders headers;
    public CreateSizeConstraintSetRequest withHeaders(CreateSizeConstraintSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSizeConstraintSetRequest request;
    public CreateSizeConstraintSetRequest withRequest(openapisdk.models.shared.CreateSizeConstraintSetRequest request) {
        this.request = request;
        return this;
    }
}