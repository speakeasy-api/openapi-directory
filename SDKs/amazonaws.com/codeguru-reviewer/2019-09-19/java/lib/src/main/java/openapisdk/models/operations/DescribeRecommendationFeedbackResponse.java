package openapisdk.models.operations;



public class DescribeRecommendationFeedbackResponse {
    public Object accessDeniedException;
    public DescribeRecommendationFeedbackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeRecommendationFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRecommendationFeedbackResponse describeRecommendationFeedbackResponse;
    public DescribeRecommendationFeedbackResponse withDescribeRecommendationFeedbackResponse(openapisdk.models.shared.DescribeRecommendationFeedbackResponse describeRecommendationFeedbackResponse) {
        this.describeRecommendationFeedbackResponse = describeRecommendationFeedbackResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRecommendationFeedbackResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRecommendationFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRecommendationFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRecommendationFeedbackResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeRecommendationFeedbackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}