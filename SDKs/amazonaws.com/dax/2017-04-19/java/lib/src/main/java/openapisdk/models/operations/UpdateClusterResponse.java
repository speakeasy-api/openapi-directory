package openapisdk.models.operations;



public class UpdateClusterResponse {
    public Object clusterNotFoundFault;
    public UpdateClusterResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public UpdateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidClusterStateFault;
    public UpdateClusterResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UpdateClusterResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterGroupStateFault;
    public UpdateClusterResponse withInvalidParameterGroupStateFault(Object invalidParameterGroupStateFault) {
        this.invalidParameterGroupStateFault = invalidParameterGroupStateFault;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateClusterResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public UpdateClusterResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public UpdateClusterResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public UpdateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateClusterResponse updateClusterResponse;
    public UpdateClusterResponse withUpdateClusterResponse(openapisdk.models.shared.UpdateClusterResponse updateClusterResponse) {
        this.updateClusterResponse = updateClusterResponse;
        return this;
    }
}