package openapisdk.models.operations;



public class ExpireSessionResponse {
    public String contentType;
    public ExpireSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> expireSessionResult;
    public ExpireSessionResponse withExpireSessionResult(java.util.Map<String, Object> expireSessionResult) {
        this.expireSessionResult = expireSessionResult;
        return this;
    }
    public Long statusCode;
    public ExpireSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}