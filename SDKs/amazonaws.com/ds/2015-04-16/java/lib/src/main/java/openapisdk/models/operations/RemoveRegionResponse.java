package openapisdk.models.operations;



public class RemoveRegionResponse {
    public Object accessDeniedException;
    public RemoveRegionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public RemoveRegionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RemoveRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryDoesNotExistException;
    public RemoveRegionResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object directoryUnavailableException;
    public RemoveRegionResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public java.util.Map<String, Object> removeRegionResult;
    public RemoveRegionResponse withRemoveRegionResult(java.util.Map<String, Object> removeRegionResult) {
        this.removeRegionResult = removeRegionResult;
        return this;
    }
    public Object serviceException;
    public RemoveRegionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RemoveRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public RemoveRegionResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}