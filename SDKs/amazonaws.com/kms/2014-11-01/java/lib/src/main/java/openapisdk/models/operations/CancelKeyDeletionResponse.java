package openapisdk.models.operations;



public class CancelKeyDeletionResponse {
    public openapisdk.models.shared.CancelKeyDeletionResponse cancelKeyDeletionResponse;
    public CancelKeyDeletionResponse withCancelKeyDeletionResponse(openapisdk.models.shared.CancelKeyDeletionResponse cancelKeyDeletionResponse) {
        this.cancelKeyDeletionResponse = cancelKeyDeletionResponse;
        return this;
    }
    public String contentType;
    public CancelKeyDeletionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public CancelKeyDeletionResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public CancelKeyDeletionResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public CancelKeyDeletionResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public CancelKeyDeletionResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public CancelKeyDeletionResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CancelKeyDeletionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}