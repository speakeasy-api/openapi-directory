package openapisdk.models.operations;



public class GetAccountStatusResponse {
    public String contentType;
    public GetAccountStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountStatusResponse getAccountStatusResponse;
    public GetAccountStatusResponse withGetAccountStatusResponse(openapisdk.models.shared.GetAccountStatusResponse getAccountStatusResponse) {
        this.getAccountStatusResponse = getAccountStatusResponse;
        return this;
    }
    public Object internalServerException;
    public GetAccountStatusResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetAccountStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}