package openapisdk.models.operations;



public class ListResourceSharePermissionsResponse {
    public String contentType;
    public ListResourceSharePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResourceSharePermissionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResourceSharePermissionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListResourceSharePermissionsResponse listResourceSharePermissionsResponse;
    public ListResourceSharePermissionsResponse withListResourceSharePermissionsResponse(openapisdk.models.shared.ListResourceSharePermissionsResponse listResourceSharePermissionsResponse) {
        this.listResourceSharePermissionsResponse = listResourceSharePermissionsResponse;
        return this;
    }
    public Object malformedArnException;
    public ListResourceSharePermissionsResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public ListResourceSharePermissionsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalException;
    public ListResourceSharePermissionsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListResourceSharePermissionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListResourceSharePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public ListResourceSharePermissionsResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}