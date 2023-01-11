package openapisdk.models.operations;



public class ModifyReplicationTaskResponse {
    public String contentType;
    public ModifyReplicationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public ModifyReplicationTaskResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public ModifyReplicationTaskResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public openapisdk.models.shared.ModifyReplicationTaskResponse modifyReplicationTaskResponse;
    public ModifyReplicationTaskResponse withModifyReplicationTaskResponse(openapisdk.models.shared.ModifyReplicationTaskResponse modifyReplicationTaskResponse) {
        this.modifyReplicationTaskResponse = modifyReplicationTaskResponse;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public ModifyReplicationTaskResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public ModifyReplicationTaskResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ModifyReplicationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}