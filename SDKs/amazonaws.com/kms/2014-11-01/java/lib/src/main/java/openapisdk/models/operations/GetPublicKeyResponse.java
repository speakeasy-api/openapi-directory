package openapisdk.models.operations;



public class GetPublicKeyResponse {
    public String contentType;
    public GetPublicKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GetPublicKeyResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public GetPublicKeyResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public openapisdk.models.shared.GetPublicKeyResponse getPublicKeyResponse;
    public GetPublicKeyResponse withGetPublicKeyResponse(openapisdk.models.shared.GetPublicKeyResponse getPublicKeyResponse) {
        this.getPublicKeyResponse = getPublicKeyResponse;
        return this;
    }
    public Object invalidArnException;
    public GetPublicKeyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidGrantTokenException;
    public GetPublicKeyResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public GetPublicKeyResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public GetPublicKeyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GetPublicKeyResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public GetPublicKeyResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public GetPublicKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetPublicKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public GetPublicKeyResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}