package openapisdk.models.operations;



public class GetUsageStatisticsResponse {
    public Object accessDeniedException;
    public GetUsageStatisticsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetUsageStatisticsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetUsageStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetUsageStatisticsResponse getUsageStatisticsResponse;
    public GetUsageStatisticsResponse withGetUsageStatisticsResponse(openapisdk.models.shared.GetUsageStatisticsResponse getUsageStatisticsResponse) {
        this.getUsageStatisticsResponse = getUsageStatisticsResponse;
        return this;
    }
    public Object internalServerException;
    public GetUsageStatisticsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetUsageStatisticsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetUsageStatisticsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetUsageStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetUsageStatisticsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetUsageStatisticsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}