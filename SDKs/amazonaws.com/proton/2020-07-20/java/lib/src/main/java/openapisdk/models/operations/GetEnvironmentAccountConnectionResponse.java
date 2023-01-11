package openapisdk.models.operations;



public class GetEnvironmentAccountConnectionResponse {
    public Object accessDeniedException;
    public GetEnvironmentAccountConnectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetEnvironmentAccountConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEnvironmentAccountConnectionOutput getEnvironmentAccountConnectionOutput;
    public GetEnvironmentAccountConnectionResponse withGetEnvironmentAccountConnectionOutput(openapisdk.models.shared.GetEnvironmentAccountConnectionOutput getEnvironmentAccountConnectionOutput) {
        this.getEnvironmentAccountConnectionOutput = getEnvironmentAccountConnectionOutput;
        return this;
    }
    public Object internalServerException;
    public GetEnvironmentAccountConnectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEnvironmentAccountConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEnvironmentAccountConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEnvironmentAccountConnectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetEnvironmentAccountConnectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}