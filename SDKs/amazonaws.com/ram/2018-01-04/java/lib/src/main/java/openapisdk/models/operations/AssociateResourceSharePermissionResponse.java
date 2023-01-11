package openapisdk.models.operations;



public class AssociateResourceSharePermissionResponse {
    public openapisdk.models.shared.AssociateResourceSharePermissionResponse associateResourceSharePermissionResponse;
    public AssociateResourceSharePermissionResponse withAssociateResourceSharePermissionResponse(openapisdk.models.shared.AssociateResourceSharePermissionResponse associateResourceSharePermissionResponse) {
        this.associateResourceSharePermissionResponse = associateResourceSharePermissionResponse;
        return this;
    }
    public String contentType;
    public AssociateResourceSharePermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidClientTokenException;
    public AssociateResourceSharePermissionResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateResourceSharePermissionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public AssociateResourceSharePermissionResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public AssociateResourceSharePermissionResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalException;
    public AssociateResourceSharePermissionResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public AssociateResourceSharePermissionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AssociateResourceSharePermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public AssociateResourceSharePermissionResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}