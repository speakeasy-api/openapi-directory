package openapisdk.models.operations;



public class SubmitFeedbackResponse {
    public String contentType;
    public SubmitFeedbackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SubmitFeedbackResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public SubmitFeedbackResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SubmitFeedbackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> submitFeedbackResponse;
    public SubmitFeedbackResponse withSubmitFeedbackResponse(java.util.Map<String, Object> submitFeedbackResponse) {
        this.submitFeedbackResponse = submitFeedbackResponse;
        return this;
    }
    public Object throttlingException;
    public SubmitFeedbackResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public SubmitFeedbackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}