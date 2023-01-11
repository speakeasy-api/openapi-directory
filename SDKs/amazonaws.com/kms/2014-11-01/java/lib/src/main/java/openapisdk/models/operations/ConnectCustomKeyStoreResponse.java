package openapisdk.models.operations;



public class ConnectCustomKeyStoreResponse {
    public Object cloudHsmClusterInvalidConfigurationException;
    public ConnectCustomKeyStoreResponse withCloudHsmClusterInvalidConfigurationException(Object cloudHsmClusterInvalidConfigurationException) {
        this.cloudHsmClusterInvalidConfigurationException = cloudHsmClusterInvalidConfigurationException;
        return this;
    }
    public Object cloudHsmClusterNotActiveException;
    public ConnectCustomKeyStoreResponse withCloudHsmClusterNotActiveException(Object cloudHsmClusterNotActiveException) {
        this.cloudHsmClusterNotActiveException = cloudHsmClusterNotActiveException;
        return this;
    }
    public java.util.Map<String, Object> connectCustomKeyStoreResponse;
    public ConnectCustomKeyStoreResponse withConnectCustomKeyStoreResponse(java.util.Map<String, Object> connectCustomKeyStoreResponse) {
        this.connectCustomKeyStoreResponse = connectCustomKeyStoreResponse;
        return this;
    }
    public String contentType;
    public ConnectCustomKeyStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customKeyStoreInvalidStateException;
    public ConnectCustomKeyStoreResponse withCustomKeyStoreInvalidStateException(Object customKeyStoreInvalidStateException) {
        this.customKeyStoreInvalidStateException = customKeyStoreInvalidStateException;
        return this;
    }
    public Object customKeyStoreNotFoundException;
    public ConnectCustomKeyStoreResponse withCustomKeyStoreNotFoundException(Object customKeyStoreNotFoundException) {
        this.customKeyStoreNotFoundException = customKeyStoreNotFoundException;
        return this;
    }
    public Object kmsInternalException;
    public ConnectCustomKeyStoreResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Long statusCode;
    public ConnectCustomKeyStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}