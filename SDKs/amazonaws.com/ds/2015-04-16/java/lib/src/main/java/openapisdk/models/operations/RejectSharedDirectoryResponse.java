package openapisdk.models.operations;



public class RejectSharedDirectoryResponse {
    public Object clientException;
    public RejectSharedDirectoryResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RejectSharedDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryAlreadySharedException;
    public RejectSharedDirectoryResponse withDirectoryAlreadySharedException(Object directoryAlreadySharedException) {
        this.directoryAlreadySharedException = directoryAlreadySharedException;
        return this;
    }
    public Object entityDoesNotExistException;
    public RejectSharedDirectoryResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public RejectSharedDirectoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.RejectSharedDirectoryResult rejectSharedDirectoryResult;
    public RejectSharedDirectoryResponse withRejectSharedDirectoryResult(openapisdk.models.shared.RejectSharedDirectoryResult rejectSharedDirectoryResult) {
        this.rejectSharedDirectoryResult = rejectSharedDirectoryResult;
        return this;
    }
    public Object serviceException;
    public RejectSharedDirectoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RejectSharedDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}