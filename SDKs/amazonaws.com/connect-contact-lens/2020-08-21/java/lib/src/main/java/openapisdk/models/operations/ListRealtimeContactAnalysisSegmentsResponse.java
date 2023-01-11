package openapisdk.models.operations;



public class ListRealtimeContactAnalysisSegmentsResponse {
    public Object accessDeniedException;
    public ListRealtimeContactAnalysisSegmentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRealtimeContactAnalysisSegmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListRealtimeContactAnalysisSegmentsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ListRealtimeContactAnalysisSegmentsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListRealtimeContactAnalysisSegmentsResponse listRealtimeContactAnalysisSegmentsResponse;
    public ListRealtimeContactAnalysisSegmentsResponse withListRealtimeContactAnalysisSegmentsResponse(openapisdk.models.shared.ListRealtimeContactAnalysisSegmentsResponse listRealtimeContactAnalysisSegmentsResponse) {
        this.listRealtimeContactAnalysisSegmentsResponse = listRealtimeContactAnalysisSegmentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListRealtimeContactAnalysisSegmentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListRealtimeContactAnalysisSegmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRealtimeContactAnalysisSegmentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}