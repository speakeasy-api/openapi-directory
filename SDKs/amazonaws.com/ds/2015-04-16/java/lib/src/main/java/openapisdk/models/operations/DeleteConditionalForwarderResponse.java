package openapisdk.models.operations;



public class DeleteConditionalForwarderResponse {
    public Object clientException;
    public DeleteConditionalForwarderResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteConditionalForwarderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteConditionalForwarderResult;
    public DeleteConditionalForwarderResponse withDeleteConditionalForwarderResult(java.util.Map<String, Object> deleteConditionalForwarderResult) {
        this.deleteConditionalForwarderResult = deleteConditionalForwarderResult;
        return this;
    }
    public Object directoryUnavailableException;
    public DeleteConditionalForwarderResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityDoesNotExistException;
    public DeleteConditionalForwarderResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteConditionalForwarderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DeleteConditionalForwarderResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteConditionalForwarderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteConditionalForwarderResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}