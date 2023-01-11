package openapisdk.models.operations;



public class UpdateCustomKeyStoreResponse {
    public Object cloudHsmClusterInvalidConfigurationException;
    public UpdateCustomKeyStoreResponse withCloudHsmClusterInvalidConfigurationException(Object cloudHsmClusterInvalidConfigurationException) {
        this.cloudHsmClusterInvalidConfigurationException = cloudHsmClusterInvalidConfigurationException;
        return this;
    }
    public Object cloudHsmClusterNotActiveException;
    public UpdateCustomKeyStoreResponse withCloudHsmClusterNotActiveException(Object cloudHsmClusterNotActiveException) {
        this.cloudHsmClusterNotActiveException = cloudHsmClusterNotActiveException;
        return this;
    }
    public Object cloudHsmClusterNotFoundException;
    public UpdateCustomKeyStoreResponse withCloudHsmClusterNotFoundException(Object cloudHsmClusterNotFoundException) {
        this.cloudHsmClusterNotFoundException = cloudHsmClusterNotFoundException;
        return this;
    }
    public Object cloudHsmClusterNotRelatedException;
    public UpdateCustomKeyStoreResponse withCloudHsmClusterNotRelatedException(Object cloudHsmClusterNotRelatedException) {
        this.cloudHsmClusterNotRelatedException = cloudHsmClusterNotRelatedException;
        return this;
    }
    public String contentType;
    public UpdateCustomKeyStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customKeyStoreInvalidStateException;
    public UpdateCustomKeyStoreResponse withCustomKeyStoreInvalidStateException(Object customKeyStoreInvalidStateException) {
        this.customKeyStoreInvalidStateException = customKeyStoreInvalidStateException;
        return this;
    }
    public Object customKeyStoreNameInUseException;
    public UpdateCustomKeyStoreResponse withCustomKeyStoreNameInUseException(Object customKeyStoreNameInUseException) {
        this.customKeyStoreNameInUseException = customKeyStoreNameInUseException;
        return this;
    }
    public Object customKeyStoreNotFoundException;
    public UpdateCustomKeyStoreResponse withCustomKeyStoreNotFoundException(Object customKeyStoreNotFoundException) {
        this.customKeyStoreNotFoundException = customKeyStoreNotFoundException;
        return this;
    }
    public Object kmsInternalException;
    public UpdateCustomKeyStoreResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Long statusCode;
    public UpdateCustomKeyStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateCustomKeyStoreResponse;
    public UpdateCustomKeyStoreResponse withUpdateCustomKeyStoreResponse(java.util.Map<String, Object> updateCustomKeyStoreResponse) {
        this.updateCustomKeyStoreResponse = updateCustomKeyStoreResponse;
        return this;
    }
}