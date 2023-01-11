package openapisdk.models.operations;



public class GrantPermissionsResponse {
    public Object concurrentModificationException;
    public GrantPermissionsResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public GrantPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GrantPermissionsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> grantPermissionsResponse;
    public GrantPermissionsResponse withGrantPermissionsResponse(java.util.Map<String, Object> grantPermissionsResponse) {
        this.grantPermissionsResponse = grantPermissionsResponse;
        return this;
    }
    public Object invalidInputException;
    public GrantPermissionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public GrantPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}