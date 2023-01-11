package openapisdk.models.operations;



public class DescribeFleetMetadataResponse {
    public String contentType;
    public DescribeFleetMetadataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFleetMetadataResponse describeFleetMetadataResponse;
    public DescribeFleetMetadataResponse withDescribeFleetMetadataResponse(openapisdk.models.shared.DescribeFleetMetadataResponse describeFleetMetadataResponse) {
        this.describeFleetMetadataResponse = describeFleetMetadataResponse;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeFleetMetadataResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeFleetMetadataResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFleetMetadataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFleetMetadataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeFleetMetadataResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeFleetMetadataResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}