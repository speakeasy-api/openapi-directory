package openapisdk.models.operations;



public class ListPermissionsResponse {
    public String contentType;
    public ListPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPermissionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListPermissionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListPermissionsResponse listPermissionsResponse;
    public ListPermissionsResponse withListPermissionsResponse(openapisdk.models.shared.ListPermissionsResponse listPermissionsResponse) {
        this.listPermissionsResponse = listPermissionsResponse;
        return this;
    }
    public Object operationNotPermittedException;
    public ListPermissionsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalException;
    public ListPermissionsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPermissionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}