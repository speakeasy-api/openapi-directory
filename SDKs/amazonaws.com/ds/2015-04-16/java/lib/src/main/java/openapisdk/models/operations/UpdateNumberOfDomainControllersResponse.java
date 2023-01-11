package openapisdk.models.operations;



public class UpdateNumberOfDomainControllersResponse {
    public Object clientException;
    public UpdateNumberOfDomainControllersResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateNumberOfDomainControllersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryUnavailableException;
    public UpdateNumberOfDomainControllersResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object domainControllerLimitExceededException;
    public UpdateNumberOfDomainControllersResponse withDomainControllerLimitExceededException(Object domainControllerLimitExceededException) {
        this.domainControllerLimitExceededException = domainControllerLimitExceededException;
        return this;
    }
    public Object entityDoesNotExistException;
    public UpdateNumberOfDomainControllersResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateNumberOfDomainControllersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public UpdateNumberOfDomainControllersResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateNumberOfDomainControllersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public UpdateNumberOfDomainControllersResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public java.util.Map<String, Object> updateNumberOfDomainControllersResult;
    public UpdateNumberOfDomainControllersResponse withUpdateNumberOfDomainControllersResult(java.util.Map<String, Object> updateNumberOfDomainControllersResult) {
        this.updateNumberOfDomainControllersResult = updateNumberOfDomainControllersResult;
        return this;
    }
}