package openapisdk.models.operations;



public class PutResourceAttributesResponse {
    public Object accessDeniedException;
    public PutResourceAttributesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutResourceAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dryRunOperation;
    public PutResourceAttributesResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object homeRegionNotSetException;
    public PutResourceAttributesResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public PutResourceAttributesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public PutResourceAttributesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public java.util.Map<String, Object> putResourceAttributesResult;
    public PutResourceAttributesResponse withPutResourceAttributesResult(java.util.Map<String, Object> putResourceAttributesResult) {
        this.putResourceAttributesResult = putResourceAttributesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public PutResourceAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public PutResourceAttributesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutResourceAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PutResourceAttributesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedOperation;
    public PutResourceAttributesResponse withUnauthorizedOperation(Object unauthorizedOperation) {
        this.unauthorizedOperation = unauthorizedOperation;
        return this;
    }
}