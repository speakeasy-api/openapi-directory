package openapisdk.models.operations;



public class ListApiKeysResponse {
    public Object badRequestException;
    public ListApiKeysResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListApiKeysResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListApiKeysResponse listApiKeysResponse;
    public ListApiKeysResponse withListApiKeysResponse(openapisdk.models.shared.ListApiKeysResponse listApiKeysResponse) {
        this.listApiKeysResponse = listApiKeysResponse;
        return this;
    }
    public Object notFoundException;
    public ListApiKeysResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListApiKeysResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}