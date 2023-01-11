package openapisdk.models.operations;



public class CreateCustomKeyStoreResponse {
    public Object cloudHsmClusterInUseException;
    public CreateCustomKeyStoreResponse withCloudHsmClusterInUseException(Object cloudHsmClusterInUseException) {
        this.cloudHsmClusterInUseException = cloudHsmClusterInUseException;
        return this;
    }
    public Object cloudHsmClusterInvalidConfigurationException;
    public CreateCustomKeyStoreResponse withCloudHsmClusterInvalidConfigurationException(Object cloudHsmClusterInvalidConfigurationException) {
        this.cloudHsmClusterInvalidConfigurationException = cloudHsmClusterInvalidConfigurationException;
        return this;
    }
    public Object cloudHsmClusterNotActiveException;
    public CreateCustomKeyStoreResponse withCloudHsmClusterNotActiveException(Object cloudHsmClusterNotActiveException) {
        this.cloudHsmClusterNotActiveException = cloudHsmClusterNotActiveException;
        return this;
    }
    public Object cloudHsmClusterNotFoundException;
    public CreateCustomKeyStoreResponse withCloudHsmClusterNotFoundException(Object cloudHsmClusterNotFoundException) {
        this.cloudHsmClusterNotFoundException = cloudHsmClusterNotFoundException;
        return this;
    }
    public String contentType;
    public CreateCustomKeyStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomKeyStoreResponse createCustomKeyStoreResponse;
    public CreateCustomKeyStoreResponse withCreateCustomKeyStoreResponse(openapisdk.models.shared.CreateCustomKeyStoreResponse createCustomKeyStoreResponse) {
        this.createCustomKeyStoreResponse = createCustomKeyStoreResponse;
        return this;
    }
    public Object customKeyStoreNameInUseException;
    public CreateCustomKeyStoreResponse withCustomKeyStoreNameInUseException(Object customKeyStoreNameInUseException) {
        this.customKeyStoreNameInUseException = customKeyStoreNameInUseException;
        return this;
    }
    public Object incorrectTrustAnchorException;
    public CreateCustomKeyStoreResponse withIncorrectTrustAnchorException(Object incorrectTrustAnchorException) {
        this.incorrectTrustAnchorException = incorrectTrustAnchorException;
        return this;
    }
    public Object kmsInternalException;
    public CreateCustomKeyStoreResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Long statusCode;
    public CreateCustomKeyStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}