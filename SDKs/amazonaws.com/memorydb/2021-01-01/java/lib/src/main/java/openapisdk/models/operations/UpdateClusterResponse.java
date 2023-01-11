package openapisdk.models.operations;



public class UpdateClusterResponse {
    public Object aclNotFoundFault;
    public UpdateClusterResponse withAclNotFoundFault(Object aclNotFoundFault) {
        this.aclNotFoundFault = aclNotFoundFault;
        return this;
    }
    public Object clusterNotFoundFault;
    public UpdateClusterResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public Object clusterQuotaForCustomerExceededFault;
    public UpdateClusterResponse withClusterQuotaForCustomerExceededFault(Object clusterQuotaForCustomerExceededFault) {
        this.clusterQuotaForCustomerExceededFault = clusterQuotaForCustomerExceededFault;
        return this;
    }
    public String contentType;
    public UpdateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidACLStateFault;
    public UpdateClusterResponse withInvalidAclStateFault(Object invalidACLStateFault) {
        this.invalidACLStateFault = invalidACLStateFault;
        return this;
    }
    public Object invalidClusterStateFault;
    public UpdateClusterResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidKMSKeyFault;
    public UpdateClusterResponse withInvalidKmsKeyFault(Object invalidKMSKeyFault) {
        this.invalidKMSKeyFault = invalidKMSKeyFault;
        return this;
    }
    public Object invalidNodeStateFault;
    public UpdateClusterResponse withInvalidNodeStateFault(Object invalidNodeStateFault) {
        this.invalidNodeStateFault = invalidNodeStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UpdateClusterResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateClusterResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidVPCNetworkStateFault;
    public UpdateClusterResponse withInvalidVpcNetworkStateFault(Object invalidVPCNetworkStateFault) {
        this.invalidVPCNetworkStateFault = invalidVPCNetworkStateFault;
        return this;
    }
    public Object noOperationFault;
    public UpdateClusterResponse withNoOperationFault(Object noOperationFault) {
        this.noOperationFault = noOperationFault;
        return this;
    }
    public Object nodeQuotaForClusterExceededFault;
    public UpdateClusterResponse withNodeQuotaForClusterExceededFault(Object nodeQuotaForClusterExceededFault) {
        this.nodeQuotaForClusterExceededFault = nodeQuotaForClusterExceededFault;
        return this;
    }
    public Object nodeQuotaForCustomerExceededFault;
    public UpdateClusterResponse withNodeQuotaForCustomerExceededFault(Object nodeQuotaForCustomerExceededFault) {
        this.nodeQuotaForCustomerExceededFault = nodeQuotaForCustomerExceededFault;
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
    public Object shardsPerClusterQuotaExceededFault;
    public UpdateClusterResponse withShardsPerClusterQuotaExceededFault(Object shardsPerClusterQuotaExceededFault) {
        this.shardsPerClusterQuotaExceededFault = shardsPerClusterQuotaExceededFault;
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