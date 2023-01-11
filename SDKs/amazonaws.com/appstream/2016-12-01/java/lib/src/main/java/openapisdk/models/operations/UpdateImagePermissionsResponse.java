package openapisdk.models.operations;



public class UpdateImagePermissionsResponse {
    public String contentType;
    public UpdateImagePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public UpdateImagePermissionsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotAvailableException;
    public UpdateImagePermissionsResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateImagePermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateImagePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateImagePermissionsResult;
    public UpdateImagePermissionsResponse withUpdateImagePermissionsResult(java.util.Map<String, Object> updateImagePermissionsResult) {
        this.updateImagePermissionsResult = updateImagePermissionsResult;
        return this;
    }
}