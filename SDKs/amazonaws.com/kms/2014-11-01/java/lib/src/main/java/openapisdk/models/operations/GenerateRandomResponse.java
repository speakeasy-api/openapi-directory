package openapisdk.models.operations;



public class GenerateRandomResponse {
    public String contentType;
    public GenerateRandomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customKeyStoreInvalidStateException;
    public GenerateRandomResponse withCustomKeyStoreInvalidStateException(Object customKeyStoreInvalidStateException) {
        this.customKeyStoreInvalidStateException = customKeyStoreInvalidStateException;
        return this;
    }
    public Object customKeyStoreNotFoundException;
    public GenerateRandomResponse withCustomKeyStoreNotFoundException(Object customKeyStoreNotFoundException) {
        this.customKeyStoreNotFoundException = customKeyStoreNotFoundException;
        return this;
    }
    public Object dependencyTimeoutException;
    public GenerateRandomResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GenerateRandomResponse generateRandomResponse;
    public GenerateRandomResponse withGenerateRandomResponse(openapisdk.models.shared.GenerateRandomResponse generateRandomResponse) {
        this.generateRandomResponse = generateRandomResponse;
        return this;
    }
    public Object kmsInternalException;
    public GenerateRandomResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Long statusCode;
    public GenerateRandomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}