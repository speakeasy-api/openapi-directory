package openapisdk.models.operations;



public class ListCustomMetricsResponse {
    public String contentType;
    public ListCustomMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListCustomMetricsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListCustomMetricsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListCustomMetricsResponse listCustomMetricsResponse;
    public ListCustomMetricsResponse withListCustomMetricsResponse(openapisdk.models.shared.ListCustomMetricsResponse listCustomMetricsResponse) {
        this.listCustomMetricsResponse = listCustomMetricsResponse;
        return this;
    }
    public Long statusCode;
    public ListCustomMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListCustomMetricsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}