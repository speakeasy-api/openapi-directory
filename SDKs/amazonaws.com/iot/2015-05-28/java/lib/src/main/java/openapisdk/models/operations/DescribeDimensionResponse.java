package openapisdk.models.operations;



public class DescribeDimensionResponse {
    public String contentType;
    public DescribeDimensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDimensionResponse describeDimensionResponse;
    public DescribeDimensionResponse withDescribeDimensionResponse(openapisdk.models.shared.DescribeDimensionResponse describeDimensionResponse) {
        this.describeDimensionResponse = describeDimensionResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDimensionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDimensionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDimensionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDimensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDimensionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}