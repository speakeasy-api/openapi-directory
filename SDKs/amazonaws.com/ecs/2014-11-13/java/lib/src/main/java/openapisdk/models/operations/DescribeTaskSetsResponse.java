package openapisdk.models.operations;



public class DescribeTaskSetsResponse {
    public Object accessDeniedException;
    public DescribeTaskSetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientException;
    public DescribeTaskSetsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public DescribeTaskSetsResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DescribeTaskSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTaskSetsResponse describeTaskSetsResponse;
    public DescribeTaskSetsResponse withDescribeTaskSetsResponse(openapisdk.models.shared.DescribeTaskSetsResponse describeTaskSetsResponse) {
        this.describeTaskSetsResponse = describeTaskSetsResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeTaskSetsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DescribeTaskSetsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotActiveException;
    public DescribeTaskSetsResponse withServiceNotActiveException(Object serviceNotActiveException) {
        this.serviceNotActiveException = serviceNotActiveException;
        return this;
    }
    public Object serviceNotFoundException;
    public DescribeTaskSetsResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTaskSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedFeatureException;
    public DescribeTaskSetsResponse withUnsupportedFeatureException(Object unsupportedFeatureException) {
        this.unsupportedFeatureException = unsupportedFeatureException;
        return this;
    }
}