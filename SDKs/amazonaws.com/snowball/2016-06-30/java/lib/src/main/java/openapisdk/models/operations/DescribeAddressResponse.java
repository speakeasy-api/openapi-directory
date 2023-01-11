package openapisdk.models.operations;



public class DescribeAddressResponse {
    public String contentType;
    public DescribeAddressResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAddressResult describeAddressResult;
    public DescribeAddressResponse withDescribeAddressResult(openapisdk.models.shared.DescribeAddressResult describeAddressResult) {
        this.describeAddressResult = describeAddressResult;
        return this;
    }
    public Object invalidResourceException;
    public DescribeAddressResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public DescribeAddressResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}