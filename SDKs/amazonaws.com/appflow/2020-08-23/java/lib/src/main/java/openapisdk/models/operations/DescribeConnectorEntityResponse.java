package openapisdk.models.operations;



public class DescribeConnectorEntityResponse {
    public Object connectorAuthenticationException;
    public DescribeConnectorEntityResponse withConnectorAuthenticationException(Object connectorAuthenticationException) {
        this.connectorAuthenticationException = connectorAuthenticationException;
        return this;
    }
    public Object connectorServerException;
    public DescribeConnectorEntityResponse withConnectorServerException(Object connectorServerException) {
        this.connectorServerException = connectorServerException;
        return this;
    }
    public String contentType;
    public DescribeConnectorEntityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConnectorEntityResponse describeConnectorEntityResponse;
    public DescribeConnectorEntityResponse withDescribeConnectorEntityResponse(openapisdk.models.shared.DescribeConnectorEntityResponse describeConnectorEntityResponse) {
        this.describeConnectorEntityResponse = describeConnectorEntityResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeConnectorEntityResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeConnectorEntityResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectorEntityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeConnectorEntityResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}