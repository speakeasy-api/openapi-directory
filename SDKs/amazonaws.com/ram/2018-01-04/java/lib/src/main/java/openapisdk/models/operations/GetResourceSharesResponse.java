package openapisdk.models.operations;



public class GetResourceSharesResponse {
    public String contentType;
    public GetResourceSharesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceSharesResponse getResourceSharesResponse;
    public GetResourceSharesResponse withGetResourceSharesResponse(openapisdk.models.shared.GetResourceSharesResponse getResourceSharesResponse) {
        this.getResourceSharesResponse = getResourceSharesResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public GetResourceSharesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetResourceSharesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public GetResourceSharesResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object serverInternalException;
    public GetResourceSharesResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetResourceSharesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetResourceSharesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public GetResourceSharesResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}