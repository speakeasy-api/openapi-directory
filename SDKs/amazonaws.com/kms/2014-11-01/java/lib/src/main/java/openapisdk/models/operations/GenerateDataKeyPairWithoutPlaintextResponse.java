package openapisdk.models.operations;



public class GenerateDataKeyPairWithoutPlaintextResponse {
    public String contentType;
    public GenerateDataKeyPairWithoutPlaintextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GenerateDataKeyPairWithoutPlaintextResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public GenerateDataKeyPairWithoutPlaintextResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public openapisdk.models.shared.GenerateDataKeyPairWithoutPlaintextResponse generateDataKeyPairWithoutPlaintextResponse;
    public GenerateDataKeyPairWithoutPlaintextResponse withGenerateDataKeyPairWithoutPlaintextResponse(openapisdk.models.shared.GenerateDataKeyPairWithoutPlaintextResponse generateDataKeyPairWithoutPlaintextResponse) {
        this.generateDataKeyPairWithoutPlaintextResponse = generateDataKeyPairWithoutPlaintextResponse;
        return this;
    }
    public Object invalidGrantTokenException;
    public GenerateDataKeyPairWithoutPlaintextResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public GenerateDataKeyPairWithoutPlaintextResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public GenerateDataKeyPairWithoutPlaintextResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GenerateDataKeyPairWithoutPlaintextResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public GenerateDataKeyPairWithoutPlaintextResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public GenerateDataKeyPairWithoutPlaintextResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GenerateDataKeyPairWithoutPlaintextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public GenerateDataKeyPairWithoutPlaintextResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}