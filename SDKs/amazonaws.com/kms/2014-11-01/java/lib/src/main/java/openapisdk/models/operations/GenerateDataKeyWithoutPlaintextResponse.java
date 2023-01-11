package openapisdk.models.operations;



public class GenerateDataKeyWithoutPlaintextResponse {
    public String contentType;
    public GenerateDataKeyWithoutPlaintextResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GenerateDataKeyWithoutPlaintextResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public GenerateDataKeyWithoutPlaintextResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public openapisdk.models.shared.GenerateDataKeyWithoutPlaintextResponse generateDataKeyWithoutPlaintextResponse;
    public GenerateDataKeyWithoutPlaintextResponse withGenerateDataKeyWithoutPlaintextResponse(openapisdk.models.shared.GenerateDataKeyWithoutPlaintextResponse generateDataKeyWithoutPlaintextResponse) {
        this.generateDataKeyWithoutPlaintextResponse = generateDataKeyWithoutPlaintextResponse;
        return this;
    }
    public Object invalidGrantTokenException;
    public GenerateDataKeyWithoutPlaintextResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public GenerateDataKeyWithoutPlaintextResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public GenerateDataKeyWithoutPlaintextResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GenerateDataKeyWithoutPlaintextResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public GenerateDataKeyWithoutPlaintextResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public GenerateDataKeyWithoutPlaintextResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GenerateDataKeyWithoutPlaintextResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}