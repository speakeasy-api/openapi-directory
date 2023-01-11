package openapisdk.models.operations;



public class GetResourceShareAssociationsResponse {
    public String contentType;
    public GetResourceShareAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceShareAssociationsResponse getResourceShareAssociationsResponse;
    public GetResourceShareAssociationsResponse withGetResourceShareAssociationsResponse(openapisdk.models.shared.GetResourceShareAssociationsResponse getResourceShareAssociationsResponse) {
        this.getResourceShareAssociationsResponse = getResourceShareAssociationsResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public GetResourceShareAssociationsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetResourceShareAssociationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public GetResourceShareAssociationsResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object operationNotPermittedException;
    public GetResourceShareAssociationsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object serverInternalException;
    public GetResourceShareAssociationsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetResourceShareAssociationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetResourceShareAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public GetResourceShareAssociationsResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}