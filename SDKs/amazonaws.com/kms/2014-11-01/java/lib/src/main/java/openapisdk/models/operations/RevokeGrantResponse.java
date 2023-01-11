package openapisdk.models.operations;



public class RevokeGrantResponse {
    public String contentType;
    public RevokeGrantResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public RevokeGrantResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public RevokeGrantResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidGrantIdException;
    public RevokeGrantResponse withInvalidGrantIdException(Object invalidGrantIdException) {
        this.invalidGrantIdException = invalidGrantIdException;
        return this;
    }
    public Object kmsInternalException;
    public RevokeGrantResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public RevokeGrantResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public RevokeGrantResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public RevokeGrantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}