package openapisdk.models.operations;



public class ListDeviceResourcesResponse {
    public Object accessDeniedException;
    public ListDeviceResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDeviceResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDeviceResourcesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListDeviceResourcesOutput listDeviceResourcesOutput;
    public ListDeviceResourcesResponse withListDeviceResourcesOutput(openapisdk.models.shared.ListDeviceResourcesOutput listDeviceResourcesOutput) {
        this.listDeviceResourcesOutput = listDeviceResourcesOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDeviceResourcesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListDeviceResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDeviceResourcesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListDeviceResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}