package openapisdk.models.operations;



public class DeleteUserResponse {
    public String contentType;
    public DeleteUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteUserResult;
    public DeleteUserResponse withDeleteUserResult(java.util.Map<String, Object> deleteUserResult) {
        this.deleteUserResult = deleteUserResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteUserResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}