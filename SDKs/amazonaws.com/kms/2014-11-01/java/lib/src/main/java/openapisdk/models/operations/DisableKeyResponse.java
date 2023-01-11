package openapisdk.models.operations;



public class DisableKeyResponse {
    public String contentType;
    public DisableKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public DisableKeyResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public DisableKeyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public DisableKeyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public DisableKeyResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public DisableKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DisableKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}