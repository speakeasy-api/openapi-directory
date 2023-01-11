package openapisdk.models.operations;



public class UntagResourcesResponse {
    public String contentType;
    public UntagResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UntagResourcesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public UntagResourcesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public UntagResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public UntagResourcesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
    public openapisdk.models.shared.UntagResourcesOutput untagResourcesOutput;
    public UntagResourcesResponse withUntagResourcesOutput(openapisdk.models.shared.UntagResourcesOutput untagResourcesOutput) {
        this.untagResourcesOutput = untagResourcesOutput;
        return this;
    }
}