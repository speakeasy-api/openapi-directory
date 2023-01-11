package openapisdk.models.operations;



public class GetKeyRotationStatusResponse {
    public String contentType;
    public GetKeyRotationStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GetKeyRotationStatusResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetKeyRotationStatusResponse getKeyRotationStatusResponse;
    public GetKeyRotationStatusResponse withGetKeyRotationStatusResponse(openapisdk.models.shared.GetKeyRotationStatusResponse getKeyRotationStatusResponse) {
        this.getKeyRotationStatusResponse = getKeyRotationStatusResponse;
        return this;
    }
    public Object invalidArnException;
    public GetKeyRotationStatusResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public GetKeyRotationStatusResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GetKeyRotationStatusResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object notFoundException;
    public GetKeyRotationStatusResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetKeyRotationStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public GetKeyRotationStatusResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}