package openapisdk.models.operations;



public class DescribeAnomalyDetectionExecutionsResponse {
    public Object accessDeniedException;
    public DescribeAnomalyDetectionExecutionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAnomalyDetectionExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAnomalyDetectionExecutionsResponse describeAnomalyDetectionExecutionsResponse;
    public DescribeAnomalyDetectionExecutionsResponse withDescribeAnomalyDetectionExecutionsResponse(openapisdk.models.shared.DescribeAnomalyDetectionExecutionsResponse describeAnomalyDetectionExecutionsResponse) {
        this.describeAnomalyDetectionExecutionsResponse = describeAnomalyDetectionExecutionsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAnomalyDetectionExecutionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAnomalyDetectionExecutionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAnomalyDetectionExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeAnomalyDetectionExecutionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public DescribeAnomalyDetectionExecutionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}