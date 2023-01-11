package openapisdk.models.operations;



public class DescribeClustersResponse {
    public Object clusterNotFoundFault;
    public DescribeClustersResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public DescribeClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeClustersResponse describeClustersResponse;
    public DescribeClustersResponse withDescribeClustersResponse(openapisdk.models.shared.DescribeClustersResponse describeClustersResponse) {
        this.describeClustersResponse = describeClustersResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DescribeClustersResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeClustersResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DescribeClustersResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}