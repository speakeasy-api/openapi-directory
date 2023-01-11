package openapisdk.models.operations;



public class UpdateKeyDescriptionResponse {
    public String contentType;
    public UpdateKeyDescriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public UpdateKeyDescriptionResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public UpdateKeyDescriptionResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public UpdateKeyDescriptionResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public UpdateKeyDescriptionResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public UpdateKeyDescriptionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateKeyDescriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}