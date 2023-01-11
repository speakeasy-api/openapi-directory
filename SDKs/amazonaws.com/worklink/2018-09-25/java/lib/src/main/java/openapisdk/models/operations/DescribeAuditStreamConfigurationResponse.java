package openapisdk.models.operations;



public class DescribeAuditStreamConfigurationResponse {
    public String contentType;
    public DescribeAuditStreamConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAuditStreamConfigurationResponse describeAuditStreamConfigurationResponse;
    public DescribeAuditStreamConfigurationResponse withDescribeAuditStreamConfigurationResponse(openapisdk.models.shared.DescribeAuditStreamConfigurationResponse describeAuditStreamConfigurationResponse) {
        this.describeAuditStreamConfigurationResponse = describeAuditStreamConfigurationResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeAuditStreamConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAuditStreamConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAuditStreamConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAuditStreamConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeAuditStreamConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeAuditStreamConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}