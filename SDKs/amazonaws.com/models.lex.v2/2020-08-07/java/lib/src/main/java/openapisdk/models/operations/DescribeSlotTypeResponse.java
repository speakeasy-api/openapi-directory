package openapisdk.models.operations;



public class DescribeSlotTypeResponse {
    public String contentType;
    public DescribeSlotTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSlotTypeResponse describeSlotTypeResponse;
    public DescribeSlotTypeResponse withDescribeSlotTypeResponse(openapisdk.models.shared.DescribeSlotTypeResponse describeSlotTypeResponse) {
        this.describeSlotTypeResponse = describeSlotTypeResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSlotTypeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSlotTypeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeSlotTypeResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeSlotTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeSlotTypeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeSlotTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}