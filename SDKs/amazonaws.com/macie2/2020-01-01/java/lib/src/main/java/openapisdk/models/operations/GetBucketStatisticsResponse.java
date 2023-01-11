package openapisdk.models.operations;



public class GetBucketStatisticsResponse {
    public Object accessDeniedException;
    public GetBucketStatisticsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public GetBucketStatisticsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public GetBucketStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBucketStatisticsResponse getBucketStatisticsResponse;
    public GetBucketStatisticsResponse withGetBucketStatisticsResponse(openapisdk.models.shared.GetBucketStatisticsResponse getBucketStatisticsResponse) {
        this.getBucketStatisticsResponse = getBucketStatisticsResponse;
        return this;
    }
    public Object internalServerException;
    public GetBucketStatisticsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetBucketStatisticsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public GetBucketStatisticsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public GetBucketStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetBucketStatisticsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetBucketStatisticsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}