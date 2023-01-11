package openapisdk.models.operations;



public class UnshareDirectoryResponse {
    public Object clientException;
    public UnshareDirectoryResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UnshareDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotSharedException;
    public UnshareDirectoryResponse withDirectoryNotSharedException(Object directoryNotSharedException) {
        this.directoryNotSharedException = directoryNotSharedException;
        return this;
    }
    public Object entityDoesNotExistException;
    public UnshareDirectoryResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidTargetException;
    public UnshareDirectoryResponse withInvalidTargetException(Object invalidTargetException) {
        this.invalidTargetException = invalidTargetException;
        return this;
    }
    public Object serviceException;
    public UnshareDirectoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UnshareDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UnshareDirectoryResult unshareDirectoryResult;
    public UnshareDirectoryResponse withUnshareDirectoryResult(openapisdk.models.shared.UnshareDirectoryResult unshareDirectoryResult) {
        this.unshareDirectoryResult = unshareDirectoryResult;
        return this;
    }
}