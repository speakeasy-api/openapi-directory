package openapisdk.models.operations;



public class DescribeServiceResponse {
    public String contentType;
    public DescribeServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServiceResponse describeServiceResponse;
    public DescribeServiceResponse withDescribeServiceResponse(openapisdk.models.shared.DescribeServiceResponse describeServiceResponse) {
        this.describeServiceResponse = describeServiceResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DescribeServiceResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeServiceResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeServiceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}