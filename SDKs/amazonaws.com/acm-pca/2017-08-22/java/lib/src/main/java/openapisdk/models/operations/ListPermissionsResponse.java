package openapisdk.models.operations;



public class ListPermissionsResponse {
    public String contentType;
    public ListPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArnException;
    public ListPermissionsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPermissionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidStateException;
    public ListPermissionsResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public openapisdk.models.shared.ListPermissionsResponse listPermissionsResponse;
    public ListPermissionsResponse withListPermissionsResponse(openapisdk.models.shared.ListPermissionsResponse listPermissionsResponse) {
        this.listPermissionsResponse = listPermissionsResponse;
        return this;
    }
    public Object requestFailedException;
    public ListPermissionsResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}