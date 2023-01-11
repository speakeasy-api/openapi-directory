package openapisdk.models.operations;



public class DescribeUpdateResponse {
    public Object clientException;
    public DescribeUpdateResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeUpdateResponse describeUpdateResponse;
    public DescribeUpdateResponse withDescribeUpdateResponse(openapisdk.models.shared.DescribeUpdateResponse describeUpdateResponse) {
        this.describeUpdateResponse = describeUpdateResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeUpdateResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeUpdateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeUpdateResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}