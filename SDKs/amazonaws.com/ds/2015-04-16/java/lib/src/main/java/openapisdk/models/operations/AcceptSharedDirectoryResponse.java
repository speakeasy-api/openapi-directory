package openapisdk.models.operations;



public class AcceptSharedDirectoryResponse {
    public openapisdk.models.shared.AcceptSharedDirectoryResult acceptSharedDirectoryResult;
    public AcceptSharedDirectoryResponse withAcceptSharedDirectoryResult(openapisdk.models.shared.AcceptSharedDirectoryResult acceptSharedDirectoryResult) {
        this.acceptSharedDirectoryResult = acceptSharedDirectoryResult;
        return this;
    }
    public Object clientException;
    public AcceptSharedDirectoryResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public AcceptSharedDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryAlreadySharedException;
    public AcceptSharedDirectoryResponse withDirectoryAlreadySharedException(Object directoryAlreadySharedException) {
        this.directoryAlreadySharedException = directoryAlreadySharedException;
        return this;
    }
    public Object entityDoesNotExistException;
    public AcceptSharedDirectoryResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public AcceptSharedDirectoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public AcceptSharedDirectoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AcceptSharedDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}