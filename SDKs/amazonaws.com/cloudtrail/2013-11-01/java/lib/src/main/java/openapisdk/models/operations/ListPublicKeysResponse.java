package openapisdk.models.operations;



public class ListPublicKeysResponse {
    public String contentType;
    public ListPublicKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidTimeRangeException;
    public ListPublicKeysResponse withInvalidTimeRangeException(Object invalidTimeRangeException) {
        this.invalidTimeRangeException = invalidTimeRangeException;
        return this;
    }
    public Object invalidTokenException;
    public ListPublicKeysResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public openapisdk.models.shared.ListPublicKeysResponse listPublicKeysResponse;
    public ListPublicKeysResponse withListPublicKeysResponse(openapisdk.models.shared.ListPublicKeysResponse listPublicKeysResponse) {
        this.listPublicKeysResponse = listPublicKeysResponse;
        return this;
    }
    public Object operationNotPermittedException;
    public ListPublicKeysResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Long statusCode;
    public ListPublicKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ListPublicKeysResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}