package openapisdk.models.operations;



public class RemoveIpRoutesResponse {
    public Object clientException;
    public RemoveIpRoutesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RemoveIpRoutesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryUnavailableException;
    public RemoveIpRoutesResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityDoesNotExistException;
    public RemoveIpRoutesResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public RemoveIpRoutesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public java.util.Map<String, Object> removeIpRoutesResult;
    public RemoveIpRoutesResponse withRemoveIpRoutesResult(java.util.Map<String, Object> removeIpRoutesResult) {
        this.removeIpRoutesResult = removeIpRoutesResult;
        return this;
    }
    public Object serviceException;
    public RemoveIpRoutesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RemoveIpRoutesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}