package openapisdk.models.operations;



public class AddTagsToResourceResponse {
    public java.util.Map<String, Object> addTagsToResourceResult;
    public AddTagsToResourceResponse withAddTagsToResourceResult(java.util.Map<String, Object> addTagsToResourceResult) {
        this.addTagsToResourceResult = addTagsToResourceResult;
        return this;
    }
    public Object clientException;
    public AddTagsToResourceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public AddTagsToResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public AddTagsToResourceResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public AddTagsToResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public AddTagsToResourceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AddTagsToResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagLimitExceededException;
    public AddTagsToResourceResponse withTagLimitExceededException(Object tagLimitExceededException) {
        this.tagLimitExceededException = tagLimitExceededException;
        return this;
    }
}