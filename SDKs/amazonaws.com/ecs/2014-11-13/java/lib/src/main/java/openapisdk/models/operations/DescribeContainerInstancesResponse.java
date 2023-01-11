package openapisdk.models.operations;



public class DescribeContainerInstancesResponse {
    public Object clientException;
    public DescribeContainerInstancesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public DescribeContainerInstancesResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeContainerInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeContainerInstancesResponse describeContainerInstancesResponse;
    public DescribeContainerInstancesResponse withDescribeContainerInstancesResponse(openapisdk.models.shared.DescribeContainerInstancesResponse describeContainerInstancesResponse) {
        this.describeContainerInstancesResponse = describeContainerInstancesResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeContainerInstancesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeContainerInstancesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeContainerInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}