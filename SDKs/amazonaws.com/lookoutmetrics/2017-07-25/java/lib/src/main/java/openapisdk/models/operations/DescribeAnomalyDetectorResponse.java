package openapisdk.models.operations;



public class DescribeAnomalyDetectorResponse {
    public Object accessDeniedException;
    public DescribeAnomalyDetectorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAnomalyDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAnomalyDetectorResponse describeAnomalyDetectorResponse;
    public DescribeAnomalyDetectorResponse withDescribeAnomalyDetectorResponse(openapisdk.models.shared.DescribeAnomalyDetectorResponse describeAnomalyDetectorResponse) {
        this.describeAnomalyDetectorResponse = describeAnomalyDetectorResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAnomalyDetectorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAnomalyDetectorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAnomalyDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeAnomalyDetectorResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public DescribeAnomalyDetectorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}