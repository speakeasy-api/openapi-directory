package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public Object clientException;
    public ListTagsForResourceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public ListTagsForResourceResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListTagsForResourceResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListTagsForResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceResult listTagsForResourceResult;
    public ListTagsForResourceResponse withListTagsForResourceResult(openapisdk.models.shared.ListTagsForResourceResult listTagsForResourceResult) {
        this.listTagsForResourceResult = listTagsForResourceResult;
        return this;
    }
    public Object serviceException;
    public ListTagsForResourceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}