package openapisdk.models.operations;



public class DescribeFeedbackResponse {
    public Object accessDeniedException;
    public DescribeFeedbackResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFeedbackResponse describeFeedbackResponse;
    public DescribeFeedbackResponse withDescribeFeedbackResponse(openapisdk.models.shared.DescribeFeedbackResponse describeFeedbackResponse) {
        this.describeFeedbackResponse = describeFeedbackResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeFeedbackResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeFeedbackResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeFeedbackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}