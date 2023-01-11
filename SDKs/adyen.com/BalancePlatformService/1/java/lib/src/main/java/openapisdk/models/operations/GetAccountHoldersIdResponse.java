package openapisdk.models.operations;



public class GetAccountHoldersIdResponse {
    public Object accountHolder;
    public GetAccountHoldersIdResponse withAccountHolder(Object accountHolder) {
        this.accountHolder = accountHolder;
        return this;
    }
    public String contentType;
    public GetAccountHoldersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public GetAccountHoldersIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetAccountHoldersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}