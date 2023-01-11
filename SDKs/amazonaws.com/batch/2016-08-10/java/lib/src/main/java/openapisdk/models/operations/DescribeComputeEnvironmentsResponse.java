package openapisdk.models.operations;



public class DescribeComputeEnvironmentsResponse {
    public Object clientException;
    public DescribeComputeEnvironmentsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeComputeEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeComputeEnvironmentsResponse describeComputeEnvironmentsResponse;
    public DescribeComputeEnvironmentsResponse withDescribeComputeEnvironmentsResponse(openapisdk.models.shared.DescribeComputeEnvironmentsResponse describeComputeEnvironmentsResponse) {
        this.describeComputeEnvironmentsResponse = describeComputeEnvironmentsResponse;
        return this;
    }
    public Object serverException;
    public DescribeComputeEnvironmentsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeComputeEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}