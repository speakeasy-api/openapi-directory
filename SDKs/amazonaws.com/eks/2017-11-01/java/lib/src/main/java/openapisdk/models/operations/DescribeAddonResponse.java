package openapisdk.models.operations;



public class DescribeAddonResponse {
    public Object clientException;
    public DescribeAddonResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeAddonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAddonResponse describeAddonResponse;
    public DescribeAddonResponse withDescribeAddonResponse(openapisdk.models.shared.DescribeAddonResponse describeAddonResponse) {
        this.describeAddonResponse = describeAddonResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeAddonResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAddonResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAddonResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeAddonResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeAddonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}