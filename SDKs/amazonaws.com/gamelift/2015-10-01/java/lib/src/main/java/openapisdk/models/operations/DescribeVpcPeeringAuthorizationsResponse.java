package openapisdk.models.operations;



public class DescribeVpcPeeringAuthorizationsResponse {
    public String contentType;
    public DescribeVpcPeeringAuthorizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVpcPeeringAuthorizationsOutput describeVpcPeeringAuthorizationsOutput;
    public DescribeVpcPeeringAuthorizationsResponse withDescribeVpcPeeringAuthorizationsOutput(openapisdk.models.shared.DescribeVpcPeeringAuthorizationsOutput describeVpcPeeringAuthorizationsOutput) {
        this.describeVpcPeeringAuthorizationsOutput = describeVpcPeeringAuthorizationsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeVpcPeeringAuthorizationsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeVpcPeeringAuthorizationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeVpcPeeringAuthorizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeVpcPeeringAuthorizationsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}