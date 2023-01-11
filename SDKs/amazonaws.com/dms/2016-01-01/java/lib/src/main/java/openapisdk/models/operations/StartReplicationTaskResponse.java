package openapisdk.models.operations;



public class StartReplicationTaskResponse {
    public Object accessDeniedFault;
    public StartReplicationTaskResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public StartReplicationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public StartReplicationTaskResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public StartReplicationTaskResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public openapisdk.models.shared.StartReplicationTaskResponse startReplicationTaskResponse;
    public StartReplicationTaskResponse withStartReplicationTaskResponse(openapisdk.models.shared.StartReplicationTaskResponse startReplicationTaskResponse) {
        this.startReplicationTaskResponse = startReplicationTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartReplicationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}