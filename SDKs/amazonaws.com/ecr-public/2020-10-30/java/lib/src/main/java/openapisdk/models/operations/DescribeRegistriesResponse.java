package openapisdk.models.operations;



public class DescribeRegistriesResponse {
    public String contentType;
    public DescribeRegistriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRegistriesResponse describeRegistriesResponse;
    public DescribeRegistriesResponse withDescribeRegistriesResponse(openapisdk.models.shared.DescribeRegistriesResponse describeRegistriesResponse) {
        this.describeRegistriesResponse = describeRegistriesResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeRegistriesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeRegistriesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeRegistriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedCommandException;
    public DescribeRegistriesResponse withUnsupportedCommandException(Object unsupportedCommandException) {
        this.unsupportedCommandException = unsupportedCommandException;
        return this;
    }
}