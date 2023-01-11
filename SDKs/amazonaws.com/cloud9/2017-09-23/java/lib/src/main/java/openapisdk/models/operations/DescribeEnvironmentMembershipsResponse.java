package openapisdk.models.operations;



public class DescribeEnvironmentMembershipsResponse {
    public Object badRequestException;
    public DescribeEnvironmentMembershipsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public DescribeEnvironmentMembershipsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeEnvironmentMembershipsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEnvironmentMembershipsResult describeEnvironmentMembershipsResult;
    public DescribeEnvironmentMembershipsResponse withDescribeEnvironmentMembershipsResult(openapisdk.models.shared.DescribeEnvironmentMembershipsResult describeEnvironmentMembershipsResult) {
        this.describeEnvironmentMembershipsResult = describeEnvironmentMembershipsResult;
        return this;
    }
    public Object forbiddenException;
    public DescribeEnvironmentMembershipsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeEnvironmentMembershipsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object limitExceededException;
    public DescribeEnvironmentMembershipsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public DescribeEnvironmentMembershipsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEnvironmentMembershipsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeEnvironmentMembershipsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}