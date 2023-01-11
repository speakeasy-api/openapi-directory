package openapisdk.models.operations;



public class DeleteCustomMetricResponse {
    public String contentType;
    public DeleteCustomMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteCustomMetricResponse;
    public DeleteCustomMetricResponse withDeleteCustomMetricResponse(java.util.Map<String, Object> deleteCustomMetricResponse) {
        this.deleteCustomMetricResponse = deleteCustomMetricResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteCustomMetricResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteCustomMetricResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteCustomMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteCustomMetricResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}