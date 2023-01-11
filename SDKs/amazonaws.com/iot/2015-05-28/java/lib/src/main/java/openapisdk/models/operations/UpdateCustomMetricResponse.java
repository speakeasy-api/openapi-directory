package openapisdk.models.operations;



public class UpdateCustomMetricResponse {
    public String contentType;
    public UpdateCustomMetricResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateCustomMetricResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateCustomMetricResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateCustomMetricResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCustomMetricResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateCustomMetricResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateCustomMetricResponse updateCustomMetricResponse;
    public UpdateCustomMetricResponse withUpdateCustomMetricResponse(openapisdk.models.shared.UpdateCustomMetricResponse updateCustomMetricResponse) {
        this.updateCustomMetricResponse = updateCustomMetricResponse;
        return this;
    }
}