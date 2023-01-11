package openapisdk.models.operations;



public class ListRecommendationFeedbackResponse {
    public Object accessDeniedException;
    public ListRecommendationFeedbackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRecommendationFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRecommendationFeedbackResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListRecommendationFeedbackResponse listRecommendationFeedbackResponse;
    public ListRecommendationFeedbackResponse withListRecommendationFeedbackResponse(openapisdk.models.shared.ListRecommendationFeedbackResponse listRecommendationFeedbackResponse) {
        this.listRecommendationFeedbackResponse = listRecommendationFeedbackResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListRecommendationFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListRecommendationFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRecommendationFeedbackResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListRecommendationFeedbackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}