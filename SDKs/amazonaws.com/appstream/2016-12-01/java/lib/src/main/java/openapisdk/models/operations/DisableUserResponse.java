package openapisdk.models.operations;



public class DisableUserResponse {
    public String contentType;
    public DisableUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disableUserResult;
    public DisableUserResponse withDisableUserResult(java.util.Map<String, Object> disableUserResult) {
        this.disableUserResult = disableUserResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisableUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}