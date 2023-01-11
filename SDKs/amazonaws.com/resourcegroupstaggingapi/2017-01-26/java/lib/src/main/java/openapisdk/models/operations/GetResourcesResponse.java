package openapisdk.models.operations;



public class GetResourcesResponse {
    public String contentType;
    public GetResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourcesOutput getResourcesOutput;
    public GetResourcesResponse withGetResourcesOutput(openapisdk.models.shared.GetResourcesOutput getResourcesOutput) {
        this.getResourcesOutput = getResourcesOutput;
        return this;
    }
    public Object internalServiceException;
    public GetResourcesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public GetResourcesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object paginationTokenExpiredException;
    public GetResourcesResponse withPaginationTokenExpiredException(Object paginationTokenExpiredException) {
        this.paginationTokenExpiredException = paginationTokenExpiredException;
        return this;
    }
    public Long statusCode;
    public GetResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetResourcesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}