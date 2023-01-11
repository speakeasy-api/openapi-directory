package openapisdk.models.operations;



public class DescribeEnvironmentStatusResponse {
    public Object badRequestException;
    public DescribeEnvironmentStatusResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public DescribeEnvironmentStatusResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeEnvironmentStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEnvironmentStatusResult describeEnvironmentStatusResult;
    public DescribeEnvironmentStatusResponse withDescribeEnvironmentStatusResult(openapisdk.models.shared.DescribeEnvironmentStatusResult describeEnvironmentStatusResult) {
        this.describeEnvironmentStatusResult = describeEnvironmentStatusResult;
        return this;
    }
    public Object forbiddenException;
    public DescribeEnvironmentStatusResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeEnvironmentStatusResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public DescribeEnvironmentStatusResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DescribeEnvironmentStatusResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEnvironmentStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeEnvironmentStatusResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}