package openapisdk.models.operations;



public class IncreaseReplicationFactorResponse {
    public Object clusterNotFoundFault;
    public IncreaseReplicationFactorResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public IncreaseReplicationFactorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IncreaseReplicationFactorResponse increaseReplicationFactorResponse;
    public IncreaseReplicationFactorResponse withIncreaseReplicationFactorResponse(openapisdk.models.shared.IncreaseReplicationFactorResponse increaseReplicationFactorResponse) {
        this.increaseReplicationFactorResponse = increaseReplicationFactorResponse;
        return this;
    }
    public Object insufficientClusterCapacityFault;
    public IncreaseReplicationFactorResponse withInsufficientClusterCapacityFault(Object insufficientClusterCapacityFault) {
        this.insufficientClusterCapacityFault = insufficientClusterCapacityFault;
        return this;
    }
    public Object invalidClusterStateFault;
    public IncreaseReplicationFactorResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public IncreaseReplicationFactorResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public IncreaseReplicationFactorResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidVPCNetworkStateFault;
    public IncreaseReplicationFactorResponse withInvalidVpcNetworkStateFault(Object invalidVPCNetworkStateFault) {
        this.invalidVPCNetworkStateFault = invalidVPCNetworkStateFault;
        return this;
    }
    public Object nodeQuotaForClusterExceededFault;
    public IncreaseReplicationFactorResponse withNodeQuotaForClusterExceededFault(Object nodeQuotaForClusterExceededFault) {
        this.nodeQuotaForClusterExceededFault = nodeQuotaForClusterExceededFault;
        return this;
    }
    public Object nodeQuotaForCustomerExceededFault;
    public IncreaseReplicationFactorResponse withNodeQuotaForCustomerExceededFault(Object nodeQuotaForCustomerExceededFault) {
        this.nodeQuotaForCustomerExceededFault = nodeQuotaForCustomerExceededFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public IncreaseReplicationFactorResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public IncreaseReplicationFactorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}