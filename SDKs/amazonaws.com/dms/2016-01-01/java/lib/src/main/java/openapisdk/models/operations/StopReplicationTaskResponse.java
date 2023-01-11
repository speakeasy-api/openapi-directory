package openapisdk.models.operations;



public class StopReplicationTaskResponse {
    public String contentType;
    public StopReplicationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public StopReplicationTaskResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public StopReplicationTaskResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public StopReplicationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopReplicationTaskResponse stopReplicationTaskResponse;
    public StopReplicationTaskResponse withStopReplicationTaskResponse(openapisdk.models.shared.StopReplicationTaskResponse stopReplicationTaskResponse) {
        this.stopReplicationTaskResponse = stopReplicationTaskResponse;
        return this;
    }
}