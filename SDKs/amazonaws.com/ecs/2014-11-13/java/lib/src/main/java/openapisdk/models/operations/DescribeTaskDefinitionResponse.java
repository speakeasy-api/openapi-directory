package openapisdk.models.operations;



public class DescribeTaskDefinitionResponse {
    public Object clientException;
    public DescribeTaskDefinitionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeTaskDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTaskDefinitionResponse describeTaskDefinitionResponse;
    public DescribeTaskDefinitionResponse withDescribeTaskDefinitionResponse(openapisdk.models.shared.DescribeTaskDefinitionResponse describeTaskDefinitionResponse) {
        this.describeTaskDefinitionResponse = describeTaskDefinitionResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeTaskDefinitionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeTaskDefinitionResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeTaskDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}