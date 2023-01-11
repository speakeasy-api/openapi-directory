package openapisdk.models.operations;



public class DescribeServersResponse {
    public String contentType;
    public DescribeServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServersResponse describeServersResponse;
    public DescribeServersResponse withDescribeServersResponse(openapisdk.models.shared.DescribeServersResponse describeServersResponse) {
        this.describeServersResponse = describeServersResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeServersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeServersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeServersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}