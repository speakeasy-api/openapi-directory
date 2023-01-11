package openapisdk.models.operations;



public class DescribeTasksResponse {
    public Object clientException;
    public DescribeTasksResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public DescribeTasksResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTasksResponse describeTasksResponse;
    public DescribeTasksResponse withDescribeTasksResponse(openapisdk.models.shared.DescribeTasksResponse describeTasksResponse) {
        this.describeTasksResponse = describeTasksResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeTasksResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeTasksResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}