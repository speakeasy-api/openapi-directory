package openapisdk.models.operations;



public class GetServiceGraphResponse {
    public String contentType;
    public GetServiceGraphResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetServiceGraphResult getServiceGraphResult;
    public GetServiceGraphResponse withGetServiceGraphResult(openapisdk.models.shared.GetServiceGraphResult getServiceGraphResult) {
        this.getServiceGraphResult = getServiceGraphResult;
        return this;
    }
    public Object invalidRequestException;
    public GetServiceGraphResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetServiceGraphResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetServiceGraphResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}