package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object applicationDoesNotExistException;
    public UntagResourceResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object arnNotSupportedException;
    public UntagResourceResponse withArnNotSupportedException(Object arnNotSupportedException) {
        this.arnNotSupportedException = arnNotSupportedException;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentConfigDoesNotExistException;
    public UntagResourceResponse withDeploymentConfigDoesNotExistException(Object deploymentConfigDoesNotExistException) {
        this.deploymentConfigDoesNotExistException = deploymentConfigDoesNotExistException;
        return this;
    }
    public Object deploymentGroupDoesNotExistException;
    public UntagResourceResponse withDeploymentGroupDoesNotExistException(Object deploymentGroupDoesNotExistException) {
        this.deploymentGroupDoesNotExistException = deploymentGroupDoesNotExistException;
        return this;
    }
    public Object invalidArnException;
    public UntagResourceResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidTagsToAddException;
    public UntagResourceResponse withInvalidTagsToAddException(Object invalidTagsToAddException) {
        this.invalidTagsToAddException = invalidTagsToAddException;
        return this;
    }
    public Object resourceArnRequiredException;
    public UntagResourceResponse withResourceArnRequiredException(Object resourceArnRequiredException) {
        this.resourceArnRequiredException = resourceArnRequiredException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagRequiredException;
    public UntagResourceResponse withTagRequiredException(Object tagRequiredException) {
        this.tagRequiredException = tagRequiredException;
        return this;
    }
    public java.util.Map<String, Object> untagResourceOutput;
    public UntagResourceResponse withUntagResourceOutput(java.util.Map<String, Object> untagResourceOutput) {
        this.untagResourceOutput = untagResourceOutput;
        return this;
    }
}