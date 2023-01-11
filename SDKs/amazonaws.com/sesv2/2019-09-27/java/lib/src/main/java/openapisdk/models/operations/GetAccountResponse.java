package openapisdk.models.operations;



public class GetAccountResponse {
    public Object badRequestException;
    public GetAccountResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountResponse getAccountResponse;
    public GetAccountResponse withGetAccountResponse(openapisdk.models.shared.GetAccountResponse getAccountResponse) {
        this.getAccountResponse = getAccountResponse;
        return this;
    }
    public Long statusCode;
    public GetAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAccountResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}