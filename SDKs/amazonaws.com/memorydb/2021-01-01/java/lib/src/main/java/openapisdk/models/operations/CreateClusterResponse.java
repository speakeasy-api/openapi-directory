package openapisdk.models.operations;



public class CreateClusterResponse {
    public Object aclNotFoundFault;
    public CreateClusterResponse withAclNotFoundFault(Object aclNotFoundFault) {
        this.aclNotFoundFault = aclNotFoundFault;
        return this;
    }
    public Object clusterAlreadyExistsFault;
    public CreateClusterResponse withClusterAlreadyExistsFault(Object clusterAlreadyExistsFault) {
        this.clusterAlreadyExistsFault = clusterAlreadyExistsFault;
        return this;
    }
    public Object clusterQuotaForCustomerExceededFault;
    public CreateClusterResponse withClusterQuotaForCustomerExceededFault(Object clusterQuotaForCustomerExceededFault) {
        this.clusterQuotaForCustomerExceededFault = clusterQuotaForCustomerExceededFault;
        return this;
    }
    public String contentType;
    public CreateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateClusterResponse createClusterResponse;
    public CreateClusterResponse withCreateClusterResponse(openapisdk.models.shared.CreateClusterResponse createClusterResponse) {
        this.createClusterResponse = createClusterResponse;
        return this;
    }
    public Object insufficientClusterCapacityFault;
    public CreateClusterResponse withInsufficientClusterCapacityFault(Object insufficientClusterCapacityFault) {
        this.insufficientClusterCapacityFault = insufficientClusterCapacityFault;
        return this;
    }
    public Object invalidACLStateFault;
    public CreateClusterResponse withInvalidAclStateFault(Object invalidACLStateFault) {
        this.invalidACLStateFault = invalidACLStateFault;
        return this;
    }
    public Object invalidCredentialsException;
    public CreateClusterResponse withInvalidCredentialsException(Object invalidCredentialsException) {
        this.invalidCredentialsException = invalidCredentialsException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateClusterResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateClusterResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidVPCNetworkStateFault;
    public CreateClusterResponse withInvalidVpcNetworkStateFault(Object invalidVPCNetworkStateFault) {
        this.invalidVPCNetworkStateFault = invalidVPCNetworkStateFault;
        return this;
    }
    public Object nodeQuotaForClusterExceededFault;
    public CreateClusterResponse withNodeQuotaForClusterExceededFault(Object nodeQuotaForClusterExceededFault) {
        this.nodeQuotaForClusterExceededFault = nodeQuotaForClusterExceededFault;
        return this;
    }
    public Object nodeQuotaForCustomerExceededFault;
    public CreateClusterResponse withNodeQuotaForCustomerExceededFault(Object nodeQuotaForCustomerExceededFault) {
        this.nodeQuotaForCustomerExceededFault = nodeQuotaForCustomerExceededFault;
        return this;
    }
    public Object parameterGroupNotFoundFault;
    public CreateClusterResponse withParameterGroupNotFoundFault(Object parameterGroupNotFoundFault) {
        this.parameterGroupNotFoundFault = parameterGroupNotFoundFault;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public CreateClusterResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Object shardsPerClusterQuotaExceededFault;
    public CreateClusterResponse withShardsPerClusterQuotaExceededFault(Object shardsPerClusterQuotaExceededFault) {
        this.shardsPerClusterQuotaExceededFault = shardsPerClusterQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public CreateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object subnetGroupNotFoundFault;
    public CreateClusterResponse withSubnetGroupNotFoundFault(Object subnetGroupNotFoundFault) {
        this.subnetGroupNotFoundFault = subnetGroupNotFoundFault;
        return this;
    }
    public Object tagQuotaPerResourceExceeded;
    public CreateClusterResponse withTagQuotaPerResourceExceeded(Object tagQuotaPerResourceExceeded) {
        this.tagQuotaPerResourceExceeded = tagQuotaPerResourceExceeded;
        return this;
    }
}