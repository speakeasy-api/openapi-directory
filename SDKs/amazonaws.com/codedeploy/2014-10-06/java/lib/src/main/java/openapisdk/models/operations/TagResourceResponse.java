package openapisdk.models.operations;



public class TagResourceResponse {
    public Object applicationDoesNotExistException;
    public TagResourceResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object arnNotSupportedException;
    public TagResourceResponse withArnNotSupportedException(Object arnNotSupportedException) {
        this.arnNotSupportedException = arnNotSupportedException;
        return this;
    }
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deploymentConfigDoesNotExistException;
    public TagResourceResponse withDeploymentConfigDoesNotExistException(Object deploymentConfigDoesNotExistException) {
        this.deploymentConfigDoesNotExistException = deploymentConfigDoesNotExistException;
        return this;
    }
    public Object deploymentGroupDoesNotExistException;
    public TagResourceResponse withDeploymentGroupDoesNotExistException(Object deploymentGroupDoesNotExistException) {
        this.deploymentGroupDoesNotExistException = deploymentGroupDoesNotExistException;
        return this;
    }
    public Object invalidArnException;
    public TagResourceResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidTagsToAddException;
    public TagResourceResponse withInvalidTagsToAddException(Object invalidTagsToAddException) {
        this.invalidTagsToAddException = invalidTagsToAddException;
        return this;
    }
    public Object resourceArnRequiredException;
    public TagResourceResponse withResourceArnRequiredException(Object resourceArnRequiredException) {
        this.resourceArnRequiredException = resourceArnRequiredException;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagRequiredException;
    public TagResourceResponse withTagRequiredException(Object tagRequiredException) {
        this.tagRequiredException = tagRequiredException;
        return this;
    }
    public java.util.Map<String, Object> tagResourceOutput;
    public TagResourceResponse withTagResourceOutput(java.util.Map<String, Object> tagResourceOutput) {
        this.tagResourceOutput = tagResourceOutput;
        return this;
    }
}