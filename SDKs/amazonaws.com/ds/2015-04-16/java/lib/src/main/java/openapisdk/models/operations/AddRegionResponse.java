package openapisdk.models.operations;



public class AddRegionResponse {
    public Object accessDeniedException;
    public AddRegionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> addRegionResult;
    public AddRegionResponse withAddRegionResult(java.util.Map<String, Object> addRegionResult) {
        this.addRegionResult = addRegionResult;
        return this;
    }
    public Object clientException;
    public AddRegionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public AddRegionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryAlreadyInRegionException;
    public AddRegionResponse withDirectoryAlreadyInRegionException(Object directoryAlreadyInRegionException) {
        this.directoryAlreadyInRegionException = directoryAlreadyInRegionException;
        return this;
    }
    public Object directoryDoesNotExistException;
    public AddRegionResponse withDirectoryDoesNotExistException(Object directoryDoesNotExistException) {
        this.directoryDoesNotExistException = directoryDoesNotExistException;
        return this;
    }
    public Object directoryUnavailableException;
    public AddRegionResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityDoesNotExistException;
    public AddRegionResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public AddRegionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object regionLimitExceededException;
    public AddRegionResponse withRegionLimitExceededException(Object regionLimitExceededException) {
        this.regionLimitExceededException = regionLimitExceededException;
        return this;
    }
    public Object serviceException;
    public AddRegionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AddRegionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public AddRegionResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}