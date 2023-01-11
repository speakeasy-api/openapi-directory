package openapisdk.models.operations;



public class GetPermissionResponse {
    public String contentType;
    public GetPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPermissionResponse getPermissionResponse;
    public GetPermissionResponse withGetPermissionResponse(openapisdk.models.shared.GetPermissionResponse getPermissionResponse) {
        this.getPermissionResponse = getPermissionResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetPermissionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public GetPermissionResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetPermissionResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalException;
    public GetPermissionResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetPermissionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public GetPermissionResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}