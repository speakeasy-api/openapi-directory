package openapisdk.models.operations;



public class GetFindingStatisticsResponse {
    public Object accessDeniedException;
    public GetFindingStatisticsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetFindingStatisticsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetFindingStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetFindingStatisticsResponse getFindingStatisticsResponse;
    public GetFindingStatisticsResponse withGetFindingStatisticsResponse(openapisdk.models.shared.GetFindingStatisticsResponse getFindingStatisticsResponse) {
        this.getFindingStatisticsResponse = getFindingStatisticsResponse;
        return this;
    }
    public Object internalServerException;
    public GetFindingStatisticsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFindingStatisticsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetFindingStatisticsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetFindingStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetFindingStatisticsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetFindingStatisticsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}