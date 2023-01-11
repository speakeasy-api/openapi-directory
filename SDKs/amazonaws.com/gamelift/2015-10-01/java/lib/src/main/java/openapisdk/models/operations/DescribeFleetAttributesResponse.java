package openapisdk.models.operations;



public class DescribeFleetAttributesResponse {
    public String contentType;
    public DescribeFleetAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetAttributesOutput describeFleetAttributesOutput;
    public DescribeFleetAttributesResponse withDescribeFleetAttributesOutput(openapisdk.models.shared.DescribeFleetAttributesOutput describeFleetAttributesOutput) {
        this.describeFleetAttributesOutput = describeFleetAttributesOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeFleetAttributesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetAttributesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeFleetAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetAttributesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}