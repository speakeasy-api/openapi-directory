package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSizeConstraintSetRequest {
    public GetSizeConstraintSetHeaders headers;
    public GetSizeConstraintSetRequest withHeaders(GetSizeConstraintSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSizeConstraintSetRequest request;
    public GetSizeConstraintSetRequest withRequest(openapisdk.models.shared.GetSizeConstraintSetRequest request) {
        this.request = request;
        return this;
    }
}