package openapisdk.models.operations;



public class ListIpRoutesResponse {
    public Object clientException;
    public ListIpRoutesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListIpRoutesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public ListIpRoutesResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListIpRoutesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListIpRoutesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListIpRoutesResult listIpRoutesResult;
    public ListIpRoutesResponse withListIpRoutesResult(openapisdk.models.shared.ListIpRoutesResult listIpRoutesResult) {
        this.listIpRoutesResult = listIpRoutesResult;
        return this;
    }
    public Object serviceException;
    public ListIpRoutesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListIpRoutesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}