package openapisdk.models.operations;



public class DescribeBillingGroupResponse {
    public String contentType;
    public DescribeBillingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBillingGroupResponse describeBillingGroupResponse;
    public DescribeBillingGroupResponse withDescribeBillingGroupResponse(openapisdk.models.shared.DescribeBillingGroupResponse describeBillingGroupResponse) {
        this.describeBillingGroupResponse = describeBillingGroupResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeBillingGroupResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeBillingGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBillingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeBillingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeBillingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}