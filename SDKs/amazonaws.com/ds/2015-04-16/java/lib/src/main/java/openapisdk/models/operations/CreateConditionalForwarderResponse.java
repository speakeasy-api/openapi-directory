package openapisdk.models.operations;



public class CreateConditionalForwarderResponse {
    public Object clientException;
    public CreateConditionalForwarderResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateConditionalForwarderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createConditionalForwarderResult;
    public CreateConditionalForwarderResponse withCreateConditionalForwarderResult(java.util.Map<String, Object> createConditionalForwarderResult) {
        this.createConditionalForwarderResult = createConditionalForwarderResult;
        return this;
    }
    public Object directoryUnavailableException;
    public CreateConditionalForwarderResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityAlreadyExistsException;
    public CreateConditionalForwarderResponse withEntityAlreadyExistsException(Object entityAlreadyExistsException) {
        this.entityAlreadyExistsException = entityAlreadyExistsException;
        return this;
    }
    public Object entityDoesNotExistException;
    public CreateConditionalForwarderResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public CreateConditionalForwarderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public CreateConditionalForwarderResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateConditionalForwarderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateConditionalForwarderResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}