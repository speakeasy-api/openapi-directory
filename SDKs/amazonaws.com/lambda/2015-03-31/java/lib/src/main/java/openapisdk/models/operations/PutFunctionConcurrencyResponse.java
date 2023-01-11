package openapisdk.models.operations;



public class PutFunctionConcurrencyResponse {
    public openapisdk.models.shared.Concurrency concurrency;
    public PutFunctionConcurrencyResponse withConcurrency(openapisdk.models.shared.Concurrency concurrency) {
        this.concurrency = concurrency;
        return this;
    }
    public String contentType;
    public PutFunctionConcurrencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutFunctionConcurrencyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public PutFunctionConcurrencyResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public PutFunctionConcurrencyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public PutFunctionConcurrencyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PutFunctionConcurrencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutFunctionConcurrencyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}