package openapisdk.models.operations;



public class DescribeAddressesResponse {
    public String contentType;
    public DescribeAddressesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAddressesResult describeAddressesResult;
    public DescribeAddressesResponse withDescribeAddressesResult(openapisdk.models.shared.DescribeAddressesResult describeAddressesResult) {
        this.describeAddressesResult = describeAddressesResult;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeAddressesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidResourceException;
    public DescribeAddressesResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public DescribeAddressesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}