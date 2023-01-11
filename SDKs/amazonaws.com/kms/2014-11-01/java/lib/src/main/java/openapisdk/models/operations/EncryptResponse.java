package openapisdk.models.operations;



public class EncryptResponse {
    public String contentType;
    public EncryptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public EncryptResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public EncryptResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public openapisdk.models.shared.EncryptResponse encryptResponse;
    public EncryptResponse withEncryptResponse(openapisdk.models.shared.EncryptResponse encryptResponse) {
        this.encryptResponse = encryptResponse;
        return this;
    }
    public Object invalidGrantTokenException;
    public EncryptResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public EncryptResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public EncryptResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public EncryptResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public EncryptResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public EncryptResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public EncryptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}