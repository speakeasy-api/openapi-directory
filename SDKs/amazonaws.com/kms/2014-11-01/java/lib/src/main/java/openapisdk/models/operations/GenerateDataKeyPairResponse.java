package openapisdk.models.operations;



public class GenerateDataKeyPairResponse {
    public String contentType;
    public GenerateDataKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GenerateDataKeyPairResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public GenerateDataKeyPairResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public openapisdk.models.shared.GenerateDataKeyPairResponse generateDataKeyPairResponse;
    public GenerateDataKeyPairResponse withGenerateDataKeyPairResponse(openapisdk.models.shared.GenerateDataKeyPairResponse generateDataKeyPairResponse) {
        this.generateDataKeyPairResponse = generateDataKeyPairResponse;
        return this;
    }
    public Object invalidGrantTokenException;
    public GenerateDataKeyPairResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public GenerateDataKeyPairResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public GenerateDataKeyPairResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GenerateDataKeyPairResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public GenerateDataKeyPairResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public GenerateDataKeyPairResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GenerateDataKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public GenerateDataKeyPairResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}