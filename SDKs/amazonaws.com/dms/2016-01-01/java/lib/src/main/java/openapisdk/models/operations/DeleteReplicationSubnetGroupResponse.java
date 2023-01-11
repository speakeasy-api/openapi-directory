package openapisdk.models.operations;



public class DeleteReplicationSubnetGroupResponse {
    public String contentType;
    public DeleteReplicationSubnetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteReplicationSubnetGroupResponse;
    public DeleteReplicationSubnetGroupResponse withDeleteReplicationSubnetGroupResponse(java.util.Map<String, Object> deleteReplicationSubnetGroupResponse) {
        this.deleteReplicationSubnetGroupResponse = deleteReplicationSubnetGroupResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteReplicationSubnetGroupResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteReplicationSubnetGroupResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteReplicationSubnetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}