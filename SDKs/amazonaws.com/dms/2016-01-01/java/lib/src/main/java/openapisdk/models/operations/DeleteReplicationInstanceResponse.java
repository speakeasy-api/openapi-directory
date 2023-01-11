package openapisdk.models.operations;



public class DeleteReplicationInstanceResponse {
    public String contentType;
    public DeleteReplicationInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteReplicationInstanceResponse deleteReplicationInstanceResponse;
    public DeleteReplicationInstanceResponse withDeleteReplicationInstanceResponse(openapisdk.models.shared.DeleteReplicationInstanceResponse deleteReplicationInstanceResponse) {
        this.deleteReplicationInstanceResponse = deleteReplicationInstanceResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteReplicationInstanceResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteReplicationInstanceResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteReplicationInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}