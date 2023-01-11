package openapisdk.models.operations;



public class RemoveTagsFromResourceResponse {
    public Object clientException;
    public RemoveTagsFromResourceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RemoveTagsFromResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public RemoveTagsFromResourceResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public RemoveTagsFromResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public java.util.Map<String, Object> removeTagsFromResourceResult;
    public RemoveTagsFromResourceResponse withRemoveTagsFromResourceResult(java.util.Map<String, Object> removeTagsFromResourceResult) {
        this.removeTagsFromResourceResult = removeTagsFromResourceResult;
        return this;
    }
    public Object serviceException;
    public RemoveTagsFromResourceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RemoveTagsFromResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}