package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object clusterNotFoundFault;
    public UntagResourceResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidARNFault;
    public UntagResourceResponse withInvalidArnFault(Object invalidARNFault) {
        this.invalidARNFault = invalidARNFault;
        return this;
    }
    public Object invalidClusterStateFault;
    public UntagResourceResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UntagResourceResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public UntagResourceResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public UntagResourceResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagNotFoundFault;
    public UntagResourceResponse withTagNotFoundFault(Object tagNotFoundFault) {
        this.tagNotFoundFault = tagNotFoundFault;
        return this;
    }
    public openapisdk.models.shared.UntagResourceResponse untagResourceResponse;
    public UntagResourceResponse withUntagResourceResponse(openapisdk.models.shared.UntagResourceResponse untagResourceResponse) {
        this.untagResourceResponse = untagResourceResponse;
        return this;
    }
}