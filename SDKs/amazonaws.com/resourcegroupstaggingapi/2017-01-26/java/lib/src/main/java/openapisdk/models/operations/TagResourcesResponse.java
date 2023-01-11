package openapisdk.models.operations;



public class TagResourcesResponse {
    public String contentType;
    public TagResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public TagResourcesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public TagResourcesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public TagResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TagResourcesOutput tagResourcesOutput;
    public TagResourcesResponse withTagResourcesOutput(openapisdk.models.shared.TagResourcesOutput tagResourcesOutput) {
        this.tagResourcesOutput = tagResourcesOutput;
        return this;
    }
    public Object throttledException;
    public TagResourcesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}