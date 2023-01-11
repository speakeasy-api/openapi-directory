package openapisdk.models.operations;



public class DescribeServicesResponse {
    public Object clientException;
    public DescribeServicesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public DescribeServicesResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeServicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServicesResponse describeServicesResponse;
    public DescribeServicesResponse withDescribeServicesResponse(openapisdk.models.shared.DescribeServicesResponse describeServicesResponse) {
        this.describeServicesResponse = describeServicesResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeServicesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeServicesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DescribeServicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}