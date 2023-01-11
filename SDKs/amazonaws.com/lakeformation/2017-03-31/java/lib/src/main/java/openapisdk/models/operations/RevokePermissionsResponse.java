package openapisdk.models.operations;



public class RevokePermissionsResponse {
    public Object concurrentModificationException;
    public RevokePermissionsResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public RevokePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public RevokePermissionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidInputException;
    public RevokePermissionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public java.util.Map<String, Object> revokePermissionsResponse;
    public RevokePermissionsResponse withRevokePermissionsResponse(java.util.Map<String, Object> revokePermissionsResponse) {
        this.revokePermissionsResponse = revokePermissionsResponse;
        return this;
    }
    public Long statusCode;
    public RevokePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}