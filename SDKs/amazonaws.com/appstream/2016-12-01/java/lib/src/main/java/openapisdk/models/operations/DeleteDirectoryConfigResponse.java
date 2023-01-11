package openapisdk.models.operations;



public class DeleteDirectoryConfigResponse {
    public String contentType;
    public DeleteDirectoryConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDirectoryConfigResult;
    public DeleteDirectoryConfigResponse withDeleteDirectoryConfigResult(java.util.Map<String, Object> deleteDirectoryConfigResult) {
        this.deleteDirectoryConfigResult = deleteDirectoryConfigResult;
        return this;
    }
    public Object resourceInUseException;
    public DeleteDirectoryConfigResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDirectoryConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDirectoryConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}