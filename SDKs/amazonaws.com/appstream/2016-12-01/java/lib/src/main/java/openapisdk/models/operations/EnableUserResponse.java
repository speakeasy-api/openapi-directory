package openapisdk.models.operations;



public class EnableUserResponse {
    public String contentType;
    public EnableUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableUserResult;
    public EnableUserResponse withEnableUserResult(java.util.Map<String, Object> enableUserResult) {
        this.enableUserResult = enableUserResult;
        return this;
    }
    public Object invalidAccountStatusException;
    public EnableUserResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public EnableUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}