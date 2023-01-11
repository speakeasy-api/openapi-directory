package openapisdk.models.operations;



public class DescribeJobQueuesResponse {
    public Object clientException;
    public DescribeJobQueuesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeJobQueuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobQueuesResponse describeJobQueuesResponse;
    public DescribeJobQueuesResponse withDescribeJobQueuesResponse(openapisdk.models.shared.DescribeJobQueuesResponse describeJobQueuesResponse) {
        this.describeJobQueuesResponse = describeJobQueuesResponse;
        return this;
    }
    public Object serverException;
    public DescribeJobQueuesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeJobQueuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}