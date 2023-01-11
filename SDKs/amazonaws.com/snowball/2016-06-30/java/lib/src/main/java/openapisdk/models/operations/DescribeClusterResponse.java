package openapisdk.models.operations;



public class DescribeClusterResponse {
    public String contentType;
    public DescribeClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClusterResult describeClusterResult;
    public DescribeClusterResponse withDescribeClusterResult(openapisdk.models.shared.DescribeClusterResult describeClusterResult) {
        this.describeClusterResult = describeClusterResult;
        return this;
    }
    public Object invalidResourceException;
    public DescribeClusterResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public DescribeClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}