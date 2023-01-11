package openapisdk.models.operations;



public class GetResourceMetricsResponse {
    public String contentType;
    public GetResourceMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceMetricsResponse getResourceMetricsResponse;
    public GetResourceMetricsResponse withGetResourceMetricsResponse(openapisdk.models.shared.GetResourceMetricsResponse getResourceMetricsResponse) {
        this.getResourceMetricsResponse = getResourceMetricsResponse;
        return this;
    }
    public Object internalServiceError;
    public GetResourceMetricsResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidArgumentException;
    public GetResourceMetricsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public GetResourceMetricsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Long statusCode;
    public GetResourceMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}