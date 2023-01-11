package openapisdk.models.operations;



public class DescribeProjectResponse {
    public openapisdk.models.shared.BadRequestException badRequestException;
    public DescribeProjectResponse withBadRequestException(openapisdk.models.shared.BadRequestException badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DescribeProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProjectResult describeProjectResult;
    public DescribeProjectResponse withDescribeProjectResult(openapisdk.models.shared.DescribeProjectResult describeProjectResult) {
        this.describeProjectResult = describeProjectResult;
        return this;
    }
    public openapisdk.models.shared.InternalFailureException internalFailureException;
    public DescribeProjectResponse withInternalFailureException(openapisdk.models.shared.InternalFailureException internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.NotFoundException notFoundException;
    public DescribeProjectResponse withNotFoundException(openapisdk.models.shared.NotFoundException notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException;
    public DescribeProjectResponse withServiceUnavailableException(openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequestsException tooManyRequestsException;
    public DescribeProjectResponse withTooManyRequestsException(openapisdk.models.shared.TooManyRequestsException tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedException unauthorizedException;
    public DescribeProjectResponse withUnauthorizedException(openapisdk.models.shared.UnauthorizedException unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}