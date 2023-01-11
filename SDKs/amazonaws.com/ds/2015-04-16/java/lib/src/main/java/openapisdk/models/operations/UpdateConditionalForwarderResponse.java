package openapisdk.models.operations;



public class UpdateConditionalForwarderResponse {
    public Object clientException;
    public UpdateConditionalForwarderResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateConditionalForwarderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryUnavailableException;
    public UpdateConditionalForwarderResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityDoesNotExistException;
    public UpdateConditionalForwarderResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateConditionalForwarderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public UpdateConditionalForwarderResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateConditionalForwarderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public UpdateConditionalForwarderResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public java.util.Map<String, Object> updateConditionalForwarderResult;
    public UpdateConditionalForwarderResponse withUpdateConditionalForwarderResult(java.util.Map<String, Object> updateConditionalForwarderResult) {
        this.updateConditionalForwarderResult = updateConditionalForwarderResult;
        return this;
    }
}