package openapisdk.models.operations;



public class GetAnswerResponse {
    public Object accessDeniedException;
    public GetAnswerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAnswerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAnswerOutput getAnswerOutput;
    public GetAnswerResponse withGetAnswerOutput(openapisdk.models.shared.GetAnswerOutput getAnswerOutput) {
        this.getAnswerOutput = getAnswerOutput;
        return this;
    }
    public Object internalServerException;
    public GetAnswerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAnswerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAnswerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAnswerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetAnswerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}