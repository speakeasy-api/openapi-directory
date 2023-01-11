package openapisdk.models.operations;



public class PostAccountHoldersResponse {
    public Object accountHolder;
    public PostAccountHoldersResponse withAccountHolder(Object accountHolder) {
        this.accountHolder = accountHolder;
        return this;
    }
    public String contentType;
    public PostAccountHoldersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public PostAccountHoldersResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PostAccountHoldersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}