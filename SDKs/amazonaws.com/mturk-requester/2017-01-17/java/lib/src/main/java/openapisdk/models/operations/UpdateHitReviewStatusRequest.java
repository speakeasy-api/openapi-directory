package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateHitReviewStatusRequest {
    public UpdateHitReviewStatusHeaders headers;
    public UpdateHitReviewStatusRequest withHeaders(UpdateHitReviewStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateHitReviewStatusRequest request;
    public UpdateHitReviewStatusRequest withRequest(openapisdk.models.shared.UpdateHitReviewStatusRequest request) {
        this.request = request;
        return this;
    }
}