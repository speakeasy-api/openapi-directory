package openapisdk.models.operations;



public class GetServiceResponse {
    public Object accessDeniedException;
    public GetServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceOutput getServiceOutput;
    public GetServiceResponse withGetServiceOutput(openapisdk.models.shared.GetServiceOutput getServiceOutput) {
        this.getServiceOutput = getServiceOutput;
        return this;
    }
    public Object internalServerException;
    public GetServiceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetServiceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetServiceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetServiceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}