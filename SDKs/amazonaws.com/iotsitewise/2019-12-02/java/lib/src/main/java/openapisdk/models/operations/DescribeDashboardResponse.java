package openapisdk.models.operations;



public class DescribeDashboardResponse {
    public String contentType;
    public DescribeDashboardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDashboardResponse describeDashboardResponse;
    public DescribeDashboardResponse withDescribeDashboardResponse(openapisdk.models.shared.DescribeDashboardResponse describeDashboardResponse) {
        this.describeDashboardResponse = describeDashboardResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDashboardResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDashboardResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDashboardResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDashboardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDashboardResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}