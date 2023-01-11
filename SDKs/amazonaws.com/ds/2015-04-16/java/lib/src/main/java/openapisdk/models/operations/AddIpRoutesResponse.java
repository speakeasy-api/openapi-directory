package openapisdk.models.operations;



public class AddIpRoutesResponse {
    public java.util.Map<String, Object> addIpRoutesResult;
    public AddIpRoutesResponse withAddIpRoutesResult(java.util.Map<String, Object> addIpRoutesResult) {
        this.addIpRoutesResult = addIpRoutesResult;
        return this;
    }
    public Object clientException;
    public AddIpRoutesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public AddIpRoutesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryUnavailableException;
    public AddIpRoutesResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityAlreadyExistsException;
    public AddIpRoutesResponse withEntityAlreadyExistsException(Object entityAlreadyExistsException) {
        this.entityAlreadyExistsException = entityAlreadyExistsException;
        return this;
    }
    public Object entityDoesNotExistException;
    public AddIpRoutesResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public AddIpRoutesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object ipRouteLimitExceededException;
    public AddIpRoutesResponse withIpRouteLimitExceededException(Object ipRouteLimitExceededException) {
        this.ipRouteLimitExceededException = ipRouteLimitExceededException;
        return this;
    }
    public Object serviceException;
    public AddIpRoutesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AddIpRoutesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}