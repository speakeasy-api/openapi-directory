package openapisdk.models.operations;



public class PutRecommendationFeedbackResponse {
    public Object accessDeniedException;
    public PutRecommendationFeedbackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutRecommendationFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PutRecommendationFeedbackResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public java.util.Map<String, Object> putRecommendationFeedbackResponse;
    public PutRecommendationFeedbackResponse withPutRecommendationFeedbackResponse(java.util.Map<String, Object> putRecommendationFeedbackResponse) {
        this.putRecommendationFeedbackResponse = putRecommendationFeedbackResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutRecommendationFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutRecommendationFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutRecommendationFeedbackResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PutRecommendationFeedbackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}