package openapisdk.models.operations;



public class RetireGrantResponse {
    public String contentType;
    public RetireGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public RetireGrantResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public RetireGrantResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidGrantIdException;
    public RetireGrantResponse withInvalidGrantIdException(Object invalidGrantIdException) {
        this.invalidGrantIdException = invalidGrantIdException;
        return this;
    }
    public Object invalidGrantTokenException;
    public RetireGrantResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object kmsInternalException;
    public RetireGrantResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public RetireGrantResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public RetireGrantResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public RetireGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}