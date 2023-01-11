package openapisdk.models.operations;



public class DeleteFunctionConcurrencyResponse {
    public String contentType;
    public DeleteFunctionConcurrencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteFunctionConcurrencyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public DeleteFunctionConcurrencyResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteFunctionConcurrencyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteFunctionConcurrencyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteFunctionConcurrencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteFunctionConcurrencyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}