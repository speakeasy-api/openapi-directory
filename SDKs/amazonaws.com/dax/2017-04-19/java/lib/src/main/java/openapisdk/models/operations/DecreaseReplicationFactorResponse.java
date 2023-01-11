package openapisdk.models.operations;



public class DecreaseReplicationFactorResponse {
    public Object clusterNotFoundFault;
    public DecreaseReplicationFactorResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public DecreaseReplicationFactorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DecreaseReplicationFactorResponse decreaseReplicationFactorResponse;
    public DecreaseReplicationFactorResponse withDecreaseReplicationFactorResponse(openapisdk.models.shared.DecreaseReplicationFactorResponse decreaseReplicationFactorResponse) {
        this.decreaseReplicationFactorResponse = decreaseReplicationFactorResponse;
        return this;
    }
    public Object invalidClusterStateFault;
    public DecreaseReplicationFactorResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public DecreaseReplicationFactorResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public DecreaseReplicationFactorResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object nodeNotFoundFault;
    public DecreaseReplicationFactorResponse withNodeNotFoundFault(Object nodeNotFoundFault) {
        this.nodeNotFoundFault = nodeNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public DecreaseReplicationFactorResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DecreaseReplicationFactorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}