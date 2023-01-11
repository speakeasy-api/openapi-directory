package openapisdk.models.operations;



public class ListKeysResponse {
    public String contentType;
    public ListKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public ListKeysResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public Object invalidMarkerException;
    public ListKeysResponse withInvalidMarkerException(Object invalidMarkerException) {
        this.invalidMarkerException = invalidMarkerException;
        return this;
    }
    public Object kmsInternalException;
    public ListKeysResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public openapisdk.models.shared.ListKeysResponse listKeysResponse;
    public ListKeysResponse withListKeysResponse(openapisdk.models.shared.ListKeysResponse listKeysResponse) {
        this.listKeysResponse = listKeysResponse;
        return this;
    }
    public Long statusCode;
    public ListKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}