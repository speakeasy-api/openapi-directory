package openapisdk.models.operations;



public class DisassociateResourceSharePermissionResponse {
    public String contentType;
    public DisassociateResourceSharePermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateResourceSharePermissionResponse disassociateResourceSharePermissionResponse;
    public DisassociateResourceSharePermissionResponse withDisassociateResourceSharePermissionResponse(openapisdk.models.shared.DisassociateResourceSharePermissionResponse disassociateResourceSharePermissionResponse) {
        this.disassociateResourceSharePermissionResponse = disassociateResourceSharePermissionResponse;
        return this;
    }
    public Object invalidClientTokenException;
    public DisassociateResourceSharePermissionResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateResourceSharePermissionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidStateTransitionException;
    public DisassociateResourceSharePermissionResponse withInvalidStateTransitionException(Object invalidStateTransitionException) {
        this.invalidStateTransitionException = invalidStateTransitionException;
        return this;
    }
    public Object malformedArnException;
    public DisassociateResourceSharePermissionResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public DisassociateResourceSharePermissionResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalException;
    public DisassociateResourceSharePermissionResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public DisassociateResourceSharePermissionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DisassociateResourceSharePermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public DisassociateResourceSharePermissionResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}