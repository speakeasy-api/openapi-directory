package openapisdk.models.operations;



public class MoveReplicationTaskResponse {
    public Object accessDeniedFault;
    public MoveReplicationTaskResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public MoveReplicationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public MoveReplicationTaskResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public MoveReplicationTaskResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public openapisdk.models.shared.MoveReplicationTaskResponse moveReplicationTaskResponse;
    public MoveReplicationTaskResponse withMoveReplicationTaskResponse(openapisdk.models.shared.MoveReplicationTaskResponse moveReplicationTaskResponse) {
        this.moveReplicationTaskResponse = moveReplicationTaskResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public MoveReplicationTaskResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public MoveReplicationTaskResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public MoveReplicationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}