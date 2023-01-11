package openapisdk.models.operations;



public class DescribeJobsResponse {
    public Object clientException;
    public DescribeJobsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeJobsResponse describeJobsResponse;
    public DescribeJobsResponse withDescribeJobsResponse(openapisdk.models.shared.DescribeJobsResponse describeJobsResponse) {
        this.describeJobsResponse = describeJobsResponse;
        return this;
    }
    public Object serverException;
    public DescribeJobsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}