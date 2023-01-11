package openapisdk.models.operations;



public class TagResourceResponse {
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArn;
    public TagResourceResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object resourceNotFound;
    public TagResourceResponse withResourceNotFound(Object resourceNotFound) {
        this.resourceNotFound = resourceNotFound;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> tagResourceOutput;
    public TagResourceResponse withTagResourceOutput(java.util.Map<String, Object> tagResourceOutput) {
        this.tagResourceOutput = tagResourceOutput;
        return this;
    }
    public Object tooManyTags;
    public TagResourceResponse withTooManyTags(Object tooManyTags) {
        this.tooManyTags = tooManyTags;
        return this;
    }
}