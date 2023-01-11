package openapisdk.models.operations;



public class DecryptResponse {
    public String contentType;
    public DecryptResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DecryptResponse decryptResponse;
    public DecryptResponse withDecryptResponse(openapisdk.models.shared.DecryptResponse decryptResponse) {
        this.decryptResponse = decryptResponse;
        return this;
    }
    public Object dependencyTimeoutException;
    public DecryptResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public DecryptResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public Object incorrectKeyException;
    public DecryptResponse withIncorrectKeyException(Object incorrectKeyException) {
        this.incorrectKeyException = incorrectKeyException;
        return this;
    }
    public Object invalidCiphertextException;
    public DecryptResponse withInvalidCiphertextException(Object invalidCiphertextException) {
        this.invalidCiphertextException = invalidCiphertextException;
        return this;
    }
    public Object invalidGrantTokenException;
    public DecryptResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public DecryptResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public DecryptResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public DecryptResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public DecryptResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public DecryptResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DecryptResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}