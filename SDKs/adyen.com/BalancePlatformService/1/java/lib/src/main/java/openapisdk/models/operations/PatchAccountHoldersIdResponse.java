package openapisdk.models.operations;



public class PatchAccountHoldersIdResponse {
    public Object accountHolder;
    public PatchAccountHoldersIdResponse withAccountHolder(Object accountHolder) {
        this.accountHolder = accountHolder;
        return this;
    }
    public String contentType;
    public PatchAccountHoldersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public PatchAccountHoldersIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PatchAccountHoldersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}