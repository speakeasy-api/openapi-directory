package openapisdk.models.operations;



public class GetIceServerConfigResponse {
    public Object clientLimitExceededException;
    public GetIceServerConfigResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public GetIceServerConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetIceServerConfigResponse getIceServerConfigResponse;
    public GetIceServerConfigResponse withGetIceServerConfigResponse(openapisdk.models.shared.GetIceServerConfigResponse getIceServerConfigResponse) {
        this.getIceServerConfigResponse = getIceServerConfigResponse;
        return this;
    }
    public Object invalidArgumentException;
    public GetIceServerConfigResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidClientException;
    public GetIceServerConfigResponse withInvalidClientException(Object invalidClientException) {
        this.invalidClientException = invalidClientException;
        return this;
    }
    public Object notAuthorizedException;
    public GetIceServerConfigResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetIceServerConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object sessionExpiredException;
    public GetIceServerConfigResponse withSessionExpiredException(Object sessionExpiredException) {
        this.sessionExpiredException = sessionExpiredException;
        return this;
    }
    public Long statusCode;
    public GetIceServerConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}