package openapisdk.models.operations;



public class UntagResourceResponse {
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public UntagResourceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object resourceNotFoundException;
    public UntagResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> untagResourceResponse;
    public UntagResourceResponse withUntagResourceResponse(java.util.Map<String, Object> untagResourceResponse) {
        this.untagResourceResponse = untagResourceResponse;
        return this;
    }
}