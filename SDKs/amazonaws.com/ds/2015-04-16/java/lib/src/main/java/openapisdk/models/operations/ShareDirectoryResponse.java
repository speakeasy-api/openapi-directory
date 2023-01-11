package openapisdk.models.operations;



public class ShareDirectoryResponse {
    public Object accessDeniedException;
    public ShareDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public ShareDirectoryResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ShareDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryAlreadySharedException;
    public ShareDirectoryResponse withDirectoryAlreadySharedException(Object directoryAlreadySharedException) {
        this.directoryAlreadySharedException = directoryAlreadySharedException;
        return this;
    }
    public Object entityDoesNotExistException;
    public ShareDirectoryResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public ShareDirectoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidTargetException;
    public ShareDirectoryResponse withInvalidTargetException(Object invalidTargetException) {
        this.invalidTargetException = invalidTargetException;
        return this;
    }
    public Object organizationsException;
    public ShareDirectoryResponse withOrganizationsException(Object organizationsException) {
        this.organizationsException = organizationsException;
        return this;
    }
    public Object serviceException;
    public ShareDirectoryResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public openapisdk.models.shared.ShareDirectoryResult shareDirectoryResult;
    public ShareDirectoryResponse withShareDirectoryResult(openapisdk.models.shared.ShareDirectoryResult shareDirectoryResult) {
        this.shareDirectoryResult = shareDirectoryResult;
        return this;
    }
    public Object shareLimitExceededException;
    public ShareDirectoryResponse withShareLimitExceededException(Object shareLimitExceededException) {
        this.shareLimitExceededException = shareLimitExceededException;
        return this;
    }
    public Long statusCode;
    public ShareDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ShareDirectoryResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}