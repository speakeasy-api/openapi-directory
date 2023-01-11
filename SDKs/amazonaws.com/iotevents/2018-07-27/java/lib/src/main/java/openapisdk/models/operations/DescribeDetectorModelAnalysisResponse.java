package openapisdk.models.operations;



public class DescribeDetectorModelAnalysisResponse {
    public String contentType;
    public DescribeDetectorModelAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDetectorModelAnalysisResponse describeDetectorModelAnalysisResponse;
    public DescribeDetectorModelAnalysisResponse withDescribeDetectorModelAnalysisResponse(openapisdk.models.shared.DescribeDetectorModelAnalysisResponse describeDetectorModelAnalysisResponse) {
        this.describeDetectorModelAnalysisResponse = describeDetectorModelAnalysisResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeDetectorModelAnalysisResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeDetectorModelAnalysisResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDetectorModelAnalysisResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeDetectorModelAnalysisResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeDetectorModelAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDetectorModelAnalysisResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}