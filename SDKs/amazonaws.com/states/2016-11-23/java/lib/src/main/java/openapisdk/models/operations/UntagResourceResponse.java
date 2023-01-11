package openapisdk.models.operations;



public class UntagResourceResponse {
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArn;
    public UntagResourceResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object resourceNotFound;
    public UntagResourceResponse withResourceNotFound(Object resourceNotFound) {
        this.resourceNotFound = resourceNotFound;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> untagResourceOutput;
    public UntagResourceResponse withUntagResourceOutput(java.util.Map<String, Object> untagResourceOutput) {
        this.untagResourceOutput = untagResourceOutput;
        return this;
    }
}