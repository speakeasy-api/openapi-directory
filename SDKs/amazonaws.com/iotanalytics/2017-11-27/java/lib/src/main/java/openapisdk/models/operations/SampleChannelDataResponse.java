package openapisdk.models.operations;



public class SampleChannelDataResponse {
    public String contentType;
    public SampleChannelDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public SampleChannelDataResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public SampleChannelDataResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public SampleChannelDataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SampleChannelDataResponse sampleChannelDataResponse;
    public SampleChannelDataResponse withSampleChannelDataResponse(openapisdk.models.shared.SampleChannelDataResponse sampleChannelDataResponse) {
        this.sampleChannelDataResponse = sampleChannelDataResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public SampleChannelDataResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public SampleChannelDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SampleChannelDataResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}