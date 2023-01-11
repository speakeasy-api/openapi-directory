package openapisdk.models.operations;



public class DescribeClusterResponse {
    public Object clientException;
    public DescribeClusterResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClusterResponse describeClusterResponse;
    public DescribeClusterResponse withDescribeClusterResponse(openapisdk.models.shared.DescribeClusterResponse describeClusterResponse) {
        this.describeClusterResponse = describeClusterResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeClusterResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeClusterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}