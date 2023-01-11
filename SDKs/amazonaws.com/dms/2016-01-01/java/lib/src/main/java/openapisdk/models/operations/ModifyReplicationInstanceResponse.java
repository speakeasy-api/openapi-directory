package openapisdk.models.operations;



public class ModifyReplicationInstanceResponse {
    public Object accessDeniedFault;
    public ModifyReplicationInstanceResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public ModifyReplicationInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientResourceCapacityFault;
    public ModifyReplicationInstanceResponse withInsufficientResourceCapacityFault(Object insufficientResourceCapacityFault) {
        this.insufficientResourceCapacityFault = insufficientResourceCapacityFault;
        return this;
    }
    public Object invalidResourceStateFault;
    public ModifyReplicationInstanceResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public openapisdk.models.shared.ModifyReplicationInstanceResponse modifyReplicationInstanceResponse;
    public ModifyReplicationInstanceResponse withModifyReplicationInstanceResponse(openapisdk.models.shared.ModifyReplicationInstanceResponse modifyReplicationInstanceResponse) {
        this.modifyReplicationInstanceResponse = modifyReplicationInstanceResponse;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public ModifyReplicationInstanceResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public ModifyReplicationInstanceResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ModifyReplicationInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object storageQuotaExceededFault;
    public ModifyReplicationInstanceResponse withStorageQuotaExceededFault(Object storageQuotaExceededFault) {
        this.storageQuotaExceededFault = storageQuotaExceededFault;
        return this;
    }
    public Object upgradeDependencyFailureFault;
    public ModifyReplicationInstanceResponse withUpgradeDependencyFailureFault(Object upgradeDependencyFailureFault) {
        this.upgradeDependencyFailureFault = upgradeDependencyFailureFault;
        return this;
    }
}