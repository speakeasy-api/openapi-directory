package openapisdk.models.operations;



public class ReEncryptResponse {
    public String contentType;
    public ReEncryptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ReEncryptResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public ReEncryptResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public Object incorrectKeyException;
    public ReEncryptResponse withIncorrectKeyException(Object incorrectKeyException) {
        this.incorrectKeyException = incorrectKeyException;
        return this;
    }
    public Object invalidCiphertextException;
    public ReEncryptResponse withInvalidCiphertextException(Object invalidCiphertextException) {
        this.invalidCiphertextException = invalidCiphertextException;
        return this;
    }
    public Object invalidGrantTokenException;
    public ReEncryptResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public ReEncryptResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public ReEncryptResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public ReEncryptResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public ReEncryptResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public ReEncryptResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ReEncryptResponse reEncryptResponse;
    public ReEncryptResponse withReEncryptResponse(openapisdk.models.shared.ReEncryptResponse reEncryptResponse) {
        this.reEncryptResponse = reEncryptResponse;
        return this;
    }
    public Long statusCode;
    public ReEncryptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}