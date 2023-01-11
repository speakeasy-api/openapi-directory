package openapisdk.models.operations;



public class DescribeEnvironmentsResponse {
    public Object badRequestException;
    public DescribeEnvironmentsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public DescribeEnvironmentsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEnvironmentsResult describeEnvironmentsResult;
    public DescribeEnvironmentsResponse withDescribeEnvironmentsResult(openapisdk.models.shared.DescribeEnvironmentsResult describeEnvironmentsResult) {
        this.describeEnvironmentsResult = describeEnvironmentsResult;
        return this;
    }
    public Object forbiddenException;
    public DescribeEnvironmentsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeEnvironmentsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public DescribeEnvironmentsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DescribeEnvironmentsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeEnvironmentsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}