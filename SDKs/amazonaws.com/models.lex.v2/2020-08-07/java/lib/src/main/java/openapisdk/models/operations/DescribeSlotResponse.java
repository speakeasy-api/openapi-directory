package openapisdk.models.operations;



public class DescribeSlotResponse {
    public String contentType;
    public DescribeSlotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSlotResponse describeSlotResponse;
    public DescribeSlotResponse withDescribeSlotResponse(openapisdk.models.shared.DescribeSlotResponse describeSlotResponse) {
        this.describeSlotResponse = describeSlotResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSlotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSlotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeSlotResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeSlotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeSlotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeSlotResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}