package openapisdk.models.operations;



public class GetMinuteUsageResponse {
    public String contentType;
    public GetMinuteUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public GetMinuteUsageResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public openapisdk.models.shared.GetMinuteUsageResponse getMinuteUsageResponse;
    public GetMinuteUsageResponse withGetMinuteUsageResponse(openapisdk.models.shared.GetMinuteUsageResponse getMinuteUsageResponse) {
        this.getMinuteUsageResponse = getMinuteUsageResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetMinuteUsageResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMinuteUsageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMinuteUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}