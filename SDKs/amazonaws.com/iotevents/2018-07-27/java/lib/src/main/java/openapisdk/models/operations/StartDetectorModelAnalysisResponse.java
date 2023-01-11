package openapisdk.models.operations;



public class StartDetectorModelAnalysisResponse {
    public String contentType;
    public StartDetectorModelAnalysisResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartDetectorModelAnalysisResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public StartDetectorModelAnalysisResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public StartDetectorModelAnalysisResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public StartDetectorModelAnalysisResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public openapisdk.models.shared.StartDetectorModelAnalysisResponse startDetectorModelAnalysisResponse;
    public StartDetectorModelAnalysisResponse withStartDetectorModelAnalysisResponse(openapisdk.models.shared.StartDetectorModelAnalysisResponse startDetectorModelAnalysisResponse) {
        this.startDetectorModelAnalysisResponse = startDetectorModelAnalysisResponse;
        return this;
    }
    public Long statusCode;
    public StartDetectorModelAnalysisResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartDetectorModelAnalysisResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}