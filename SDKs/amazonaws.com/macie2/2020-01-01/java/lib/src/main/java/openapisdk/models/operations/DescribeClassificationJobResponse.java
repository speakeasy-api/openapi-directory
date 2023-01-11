package openapisdk.models.operations;



public class DescribeClassificationJobResponse {
    public Object accessDeniedException;
    public DescribeClassificationJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DescribeClassificationJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeClassificationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClassificationJobResponse describeClassificationJobResponse;
    public DescribeClassificationJobResponse withDescribeClassificationJobResponse(openapisdk.models.shared.DescribeClassificationJobResponse describeClassificationJobResponse) {
        this.describeClassificationJobResponse = describeClassificationJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeClassificationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeClassificationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeClassificationJobResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeClassificationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeClassificationJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeClassificationJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}