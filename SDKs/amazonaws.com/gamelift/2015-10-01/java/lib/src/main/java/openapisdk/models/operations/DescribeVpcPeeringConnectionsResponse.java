package openapisdk.models.operations;



public class DescribeVpcPeeringConnectionsResponse {
    public String contentType;
    public DescribeVpcPeeringConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVpcPeeringConnectionsOutput describeVpcPeeringConnectionsOutput;
    public DescribeVpcPeeringConnectionsResponse withDescribeVpcPeeringConnectionsOutput(openapisdk.models.shared.DescribeVpcPeeringConnectionsOutput describeVpcPeeringConnectionsOutput) {
        this.describeVpcPeeringConnectionsOutput = describeVpcPeeringConnectionsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeVpcPeeringConnectionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeVpcPeeringConnectionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeVpcPeeringConnectionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeVpcPeeringConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeVpcPeeringConnectionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}