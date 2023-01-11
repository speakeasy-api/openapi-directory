package openapisdk.models.operations;



public class VerifyResponse {
    public String contentType;
    public VerifyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public VerifyResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public VerifyResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public Object invalidGrantTokenException;
    public VerifyResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public VerifyResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public VerifyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidSignatureException;
    public VerifyResponse withKmsInvalidSignatureException(Object kmsInvalidSignatureException) {
        this.kmsInvalidSignatureException = kmsInvalidSignatureException;
        return this;
    }
    public Object kmsInvalidStateException;
    public VerifyResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public VerifyResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public VerifyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public VerifyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerifyResponse verifyResponse;
    public VerifyResponse withVerifyResponse(openapisdk.models.shared.VerifyResponse verifyResponse) {
        this.verifyResponse = verifyResponse;
        return this;
    }
}