package openapisdk.models.operations;



public class ListAnswersResponse {
    public Object accessDeniedException;
    public ListAnswersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAnswersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAnswersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAnswersOutput listAnswersOutput;
    public ListAnswersResponse withListAnswersOutput(openapisdk.models.shared.ListAnswersOutput listAnswersOutput) {
        this.listAnswersOutput = listAnswersOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAnswersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAnswersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAnswersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListAnswersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}