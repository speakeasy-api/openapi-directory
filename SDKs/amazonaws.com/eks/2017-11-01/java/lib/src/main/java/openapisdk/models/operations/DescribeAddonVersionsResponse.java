package openapisdk.models.operations;



public class DescribeAddonVersionsResponse {
    public String contentType;
    public DescribeAddonVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAddonVersionsResponse describeAddonVersionsResponse;
    public DescribeAddonVersionsResponse withDescribeAddonVersionsResponse(openapisdk.models.shared.DescribeAddonVersionsResponse describeAddonVersionsResponse) {
        this.describeAddonVersionsResponse = describeAddonVersionsResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeAddonVersionsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAddonVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeAddonVersionsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeAddonVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}