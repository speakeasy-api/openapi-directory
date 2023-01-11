package openapisdk.models.operations;



public class GenerateDataKeyResponse {
    public String contentType;
    public GenerateDataKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public GenerateDataKeyResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object disabledException;
    public GenerateDataKeyResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public openapisdk.models.shared.GenerateDataKeyResponse generateDataKeyResponse;
    public GenerateDataKeyResponse withGenerateDataKeyResponse(openapisdk.models.shared.GenerateDataKeyResponse generateDataKeyResponse) {
        this.generateDataKeyResponse = generateDataKeyResponse;
        return this;
    }
    public Object invalidGrantTokenException;
    public GenerateDataKeyResponse withInvalidGrantTokenException(Object invalidGrantTokenException) {
        this.invalidGrantTokenException = invalidGrantTokenException;
        return this;
    }
    public Object invalidKeyUsageException;
    public GenerateDataKeyResponse withInvalidKeyUsageException(Object invalidKeyUsageException) {
        this.invalidKeyUsageException = invalidKeyUsageException;
        return this;
    }
    public Object kmsInternalException;
    public GenerateDataKeyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GenerateDataKeyResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object keyUnavailableException;
    public GenerateDataKeyResponse withKeyUnavailableException(Object keyUnavailableException) {
        this.keyUnavailableException = keyUnavailableException;
        return this;
    }
    public Object notFoundException;
    public GenerateDataKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GenerateDataKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}