package openapisdk.models.operations;



public class GetDetectorModelAnalysisResultsResponse {
    public String contentType;
    public GetDetectorModelAnalysisResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDetectorModelAnalysisResultsResponse getDetectorModelAnalysisResultsResponse;
    public GetDetectorModelAnalysisResultsResponse withGetDetectorModelAnalysisResultsResponse(openapisdk.models.shared.GetDetectorModelAnalysisResultsResponse getDetectorModelAnalysisResultsResponse) {
        this.getDetectorModelAnalysisResultsResponse = getDetectorModelAnalysisResultsResponse;
        return this;
    }
    public Object internalFailureException;
    public GetDetectorModelAnalysisResultsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetDetectorModelAnalysisResultsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDetectorModelAnalysisResultsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetDetectorModelAnalysisResultsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetDetectorModelAnalysisResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetDetectorModelAnalysisResultsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}