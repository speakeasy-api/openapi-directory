package openapisdk.models.operations;



public class DeleteCustomKeyStoreResponse {
    public String contentType;
    public DeleteCustomKeyStoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customKeyStoreHasCMKsException;
    public DeleteCustomKeyStoreResponse withCustomKeyStoreHasCmKsException(Object customKeyStoreHasCMKsException) {
        this.customKeyStoreHasCMKsException = customKeyStoreHasCMKsException;
        return this;
    }
    public Object customKeyStoreInvalidStateException;
    public DeleteCustomKeyStoreResponse withCustomKeyStoreInvalidStateException(Object customKeyStoreInvalidStateException) {
        this.customKeyStoreInvalidStateException = customKeyStoreInvalidStateException;
        return this;
    }
    public Object customKeyStoreNotFoundException;
    public DeleteCustomKeyStoreResponse withCustomKeyStoreNotFoundException(Object customKeyStoreNotFoundException) {
        this.customKeyStoreNotFoundException = customKeyStoreNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> deleteCustomKeyStoreResponse;
    public DeleteCustomKeyStoreResponse withDeleteCustomKeyStoreResponse(java.util.Map<String, Object> deleteCustomKeyStoreResponse) {
        this.deleteCustomKeyStoreResponse = deleteCustomKeyStoreResponse;
        return this;
    }
    public Object kmsInternalException;
    public DeleteCustomKeyStoreResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Long statusCode;
    public DeleteCustomKeyStoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}