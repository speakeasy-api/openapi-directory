package openapisdk.models.operations;



public class ListClassificationJobsResponse {
    public Object accessDeniedException;
    public ListClassificationJobsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public ListClassificationJobsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ListClassificationJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListClassificationJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListClassificationJobsResponse listClassificationJobsResponse;
    public ListClassificationJobsResponse withListClassificationJobsResponse(openapisdk.models.shared.ListClassificationJobsResponse listClassificationJobsResponse) {
        this.listClassificationJobsResponse = listClassificationJobsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListClassificationJobsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListClassificationJobsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListClassificationJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListClassificationJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListClassificationJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}