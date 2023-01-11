package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListReviewPolicyResultsForHitRequest {
    public ListReviewPolicyResultsForHitQueryParams queryParams;
    public ListReviewPolicyResultsForHitRequest withQueryParams(ListReviewPolicyResultsForHitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListReviewPolicyResultsForHitHeaders headers;
    public ListReviewPolicyResultsForHitRequest withHeaders(ListReviewPolicyResultsForHitHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListReviewPolicyResultsForHitRequest request;
    public ListReviewPolicyResultsForHitRequest withRequest(openapisdk.models.shared.ListReviewPolicyResultsForHitRequest request) {
        this.request = request;
        return this;
    }
}