package openapisdk.models.operations;



public class DeleteDirectoryResponse {
    public Object clientException;
    public DeleteDirectoryResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteDirectoryResult deleteDirectoryResult;
    public DeleteDirectoryResponse withDeleteDirectoryResult(openapisdk.models.shared.DeleteDirectoryResult deleteDirectoryResult) {
        this.deleteDirectoryResult = deleteDirectoryResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DeleteDirectoryResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object serviceException;
    public DeleteDirectoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}