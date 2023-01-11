package openapisdk.models.operations;



public class DeleteReplicationTaskResponse {
    public String contentType;
    public DeleteReplicationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteReplicationTaskResponse deleteReplicationTaskResponse;
    public DeleteReplicationTaskResponse withDeleteReplicationTaskResponse(openapisdk.models.shared.DeleteReplicationTaskResponse deleteReplicationTaskResponse) {
        this.deleteReplicationTaskResponse = deleteReplicationTaskResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteReplicationTaskResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteReplicationTaskResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteReplicationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}