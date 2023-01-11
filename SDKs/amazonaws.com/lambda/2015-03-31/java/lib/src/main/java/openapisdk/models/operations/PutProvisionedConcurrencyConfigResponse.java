package openapisdk.models.operations;



public class PutProvisionedConcurrencyConfigResponse {
    public String contentType;
    public PutProvisionedConcurrencyConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutProvisionedConcurrencyConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.PutProvisionedConcurrencyConfigResponse putProvisionedConcurrencyConfigResponse;
    public PutProvisionedConcurrencyConfigResponse withPutProvisionedConcurrencyConfigResponse(openapisdk.models.shared.PutProvisionedConcurrencyConfigResponse putProvisionedConcurrencyConfigResponse) {
        this.putProvisionedConcurrencyConfigResponse = putProvisionedConcurrencyConfigResponse;
        return this;
    }
    public Object resourceConflictException;
    public PutProvisionedConcurrencyConfigResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutProvisionedConcurrencyConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PutProvisionedConcurrencyConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PutProvisionedConcurrencyConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutProvisionedConcurrencyConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}