package openapisdk.models.operations;



public class ListReviewPolicyResultsForHitResponse {
    public String contentType;
    public ListReviewPolicyResultsForHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListReviewPolicyResultsForHitResponse listReviewPolicyResultsForHITResponse;
    public ListReviewPolicyResultsForHitResponse withListReviewPolicyResultsForHitResponse(openapisdk.models.shared.ListReviewPolicyResultsForHitResponse listReviewPolicyResultsForHITResponse) {
        this.listReviewPolicyResultsForHITResponse = listReviewPolicyResultsForHITResponse;
        return this;
    }
    public Object requestError;
    public ListReviewPolicyResultsForHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public ListReviewPolicyResultsForHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public ListReviewPolicyResultsForHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}