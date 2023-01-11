package openapisdk.models.operations;



public class GetServiceInstanceResponse {
    public Object accessDeniedException;
    public GetServiceInstanceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetServiceInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceInstanceOutput getServiceInstanceOutput;
    public GetServiceInstanceResponse withGetServiceInstanceOutput(openapisdk.models.shared.GetServiceInstanceOutput getServiceInstanceOutput) {
        this.getServiceInstanceOutput = getServiceInstanceOutput;
        return this;
    }
    public Object internalServerException;
    public GetServiceInstanceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetServiceInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetServiceInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetServiceInstanceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetServiceInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}