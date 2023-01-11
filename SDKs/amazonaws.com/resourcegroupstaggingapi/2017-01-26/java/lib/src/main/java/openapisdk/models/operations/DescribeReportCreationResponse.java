package openapisdk.models.operations;



public class DescribeReportCreationResponse {
    public Object constraintViolationException;
    public DescribeReportCreationResponse withConstraintViolationException(Object constraintViolationException) {
        this.constraintViolationException = constraintViolationException;
        return this;
    }
    public String contentType;
    public DescribeReportCreationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReportCreationOutput describeReportCreationOutput;
    public DescribeReportCreationResponse withDescribeReportCreationOutput(openapisdk.models.shared.DescribeReportCreationOutput describeReportCreationOutput) {
        this.describeReportCreationOutput = describeReportCreationOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeReportCreationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public DescribeReportCreationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DescribeReportCreationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public DescribeReportCreationResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}