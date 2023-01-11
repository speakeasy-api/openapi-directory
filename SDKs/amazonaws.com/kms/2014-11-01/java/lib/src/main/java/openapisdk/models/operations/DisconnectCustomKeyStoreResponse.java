package openapisdk.models.operations;



public class DisconnectCustomKeyStoreResponse {
    public String contentType;
    public DisconnectCustomKeyStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customKeyStoreInvalidStateException;
    public DisconnectCustomKeyStoreResponse withCustomKeyStoreInvalidStateException(Object customKeyStoreInvalidStateException) {
        this.customKeyStoreInvalidStateException = customKeyStoreInvalidStateException;
        return this;
    }
    public Object customKeyStoreNotFoundException;
    public DisconnectCustomKeyStoreResponse withCustomKeyStoreNotFoundException(Object customKeyStoreNotFoundException) {
        this.customKeyStoreNotFoundException = customKeyStoreNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> disconnectCustomKeyStoreResponse;
    public DisconnectCustomKeyStoreResponse withDisconnectCustomKeyStoreResponse(java.util.Map<String, Object> disconnectCustomKeyStoreResponse) {
        this.disconnectCustomKeyStoreResponse = disconnectCustomKeyStoreResponse;
        return this;
    }
    public Object kmsInternalException;
    public DisconnectCustomKeyStoreResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Long statusCode;
    public DisconnectCustomKeyStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}