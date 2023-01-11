package openapisdk.models.operations;



public class DescribeRegistryResponse {
    public String contentType;
    public DescribeRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRegistryResponse describeRegistryResponse;
    public DescribeRegistryResponse withDescribeRegistryResponse(openapisdk.models.shared.DescribeRegistryResponse describeRegistryResponse) {
        this.describeRegistryResponse = describeRegistryResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeRegistryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeRegistryResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeRegistryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}