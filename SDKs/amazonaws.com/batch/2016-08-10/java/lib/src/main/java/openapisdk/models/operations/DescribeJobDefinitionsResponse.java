package openapisdk.models.operations;



public class DescribeJobDefinitionsResponse {
    public Object clientException;
    public DescribeJobDefinitionsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeJobDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobDefinitionsResponse describeJobDefinitionsResponse;
    public DescribeJobDefinitionsResponse withDescribeJobDefinitionsResponse(openapisdk.models.shared.DescribeJobDefinitionsResponse describeJobDefinitionsResponse) {
        this.describeJobDefinitionsResponse = describeJobDefinitionsResponse;
        return this;
    }
    public Object serverException;
    public DescribeJobDefinitionsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeJobDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}