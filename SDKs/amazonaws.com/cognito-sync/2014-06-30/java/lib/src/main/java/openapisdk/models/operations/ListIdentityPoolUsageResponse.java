package openapisdk.models.operations;



public class ListIdentityPoolUsageResponse {
    public String contentType;
    public ListIdentityPoolUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListIdentityPoolUsageResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListIdentityPoolUsageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListIdentityPoolUsageResponse listIdentityPoolUsageResponse;
    public ListIdentityPoolUsageResponse withListIdentityPoolUsageResponse(openapisdk.models.shared.ListIdentityPoolUsageResponse listIdentityPoolUsageResponse) {
        this.listIdentityPoolUsageResponse = listIdentityPoolUsageResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListIdentityPoolUsageResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Long statusCode;
    public ListIdentityPoolUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListIdentityPoolUsageResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}