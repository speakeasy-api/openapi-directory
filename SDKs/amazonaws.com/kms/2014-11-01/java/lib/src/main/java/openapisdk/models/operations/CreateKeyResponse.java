package openapisdk.models.operations;



public class CreateKeyResponse {
    public Object cloudHsmClusterInvalidConfigurationException;
    public CreateKeyResponse withCloudHsmClusterInvalidConfigurationException(Object cloudHsmClusterInvalidConfigurationException) {
        this.cloudHsmClusterInvalidConfigurationException = cloudHsmClusterInvalidConfigurationException;
        return this;
    }
    public String contentType;
    public CreateKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateKeyResponse createKeyResponse;
    public CreateKeyResponse withCreateKeyResponse(openapisdk.models.shared.CreateKeyResponse createKeyResponse) {
        this.createKeyResponse = createKeyResponse;
        return this;
    }
    public Object customKeyStoreInvalidStateException;
    public CreateKeyResponse withCustomKeyStoreInvalidStateException(Object customKeyStoreInvalidStateException) {
        this.customKeyStoreInvalidStateException = customKeyStoreInvalidStateException;
        return this;
    }
    public Object customKeyStoreNotFoundException;
    public CreateKeyResponse withCustomKeyStoreNotFoundException(Object customKeyStoreNotFoundException) {
        this.customKeyStoreNotFoundException = customKeyStoreNotFoundException;
        return this;
    }
    public Object dependencyTimeoutException;
    public CreateKeyResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidArnException;
    public CreateKeyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public CreateKeyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object limitExceededException;
    public CreateKeyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object malformedPolicyDocumentException;
    public CreateKeyResponse withMalformedPolicyDocumentException(Object malformedPolicyDocumentException) {
        this.malformedPolicyDocumentException = malformedPolicyDocumentException;
        return this;
    }
    public Long statusCode;
    public CreateKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagException;
    public CreateKeyResponse withTagException(Object tagException) {
        this.tagException = tagException;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateKeyResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}