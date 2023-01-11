package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object argumentException;
    public UntagResourceResponse withArgumentException(Object argumentException) {
        this.argumentException = argumentException;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UntagResourceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOperationException;
    public UntagResourceResponse withTagOperationException(Object tagOperationException) {
        this.tagOperationException = tagOperationException;
        return this;
    }
    public java.util.Map<String, Object> untagResourceResponse;
    public UntagResourceResponse withUntagResourceResponse(java.util.Map<String, Object> untagResourceResponse) {
        this.untagResourceResponse = untagResourceResponse;
        return this;
    }
}