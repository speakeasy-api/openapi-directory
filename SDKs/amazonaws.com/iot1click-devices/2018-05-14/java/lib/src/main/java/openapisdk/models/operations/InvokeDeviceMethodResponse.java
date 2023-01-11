package openapisdk.models.operations;



public class InvokeDeviceMethodResponse {
    public String contentType;
    public InvokeDeviceMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public InvokeDeviceMethodResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public InvokeDeviceMethodResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.InvokeDeviceMethodResponse invokeDeviceMethodResponse;
    public InvokeDeviceMethodResponse withInvokeDeviceMethodResponse(openapisdk.models.shared.InvokeDeviceMethodResponse invokeDeviceMethodResponse) {
        this.invokeDeviceMethodResponse = invokeDeviceMethodResponse;
        return this;
    }
    public Object preconditionFailedException;
    public InvokeDeviceMethodResponse withPreconditionFailedException(Object preconditionFailedException) {
        this.preconditionFailedException = preconditionFailedException;
        return this;
    }
    public Object rangeNotSatisfiableException;
    public InvokeDeviceMethodResponse withRangeNotSatisfiableException(Object rangeNotSatisfiableException) {
        this.rangeNotSatisfiableException = rangeNotSatisfiableException;
        return this;
    }
    public Object resourceConflictException;
    public InvokeDeviceMethodResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public InvokeDeviceMethodResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public InvokeDeviceMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}