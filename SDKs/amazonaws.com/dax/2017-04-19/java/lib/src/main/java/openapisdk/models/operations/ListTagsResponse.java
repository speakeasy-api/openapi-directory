package openapisdk.models.operations;



public class ListTagsResponse {
    public Object clusterNotFoundFault;
    public ListTagsResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public ListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidARNFault;
    public ListTagsResponse withInvalidArnFault(Object invalidARNFault) {
        this.invalidARNFault = invalidARNFault;
        return this;
    }
    public Object invalidClusterStateFault;
    public ListTagsResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public ListTagsResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public ListTagsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListTagsResponse listTagsResponse;
    public ListTagsResponse withListTagsResponse(openapisdk.models.shared.ListTagsResponse listTagsResponse) {
        this.listTagsResponse = listTagsResponse;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public ListTagsResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}