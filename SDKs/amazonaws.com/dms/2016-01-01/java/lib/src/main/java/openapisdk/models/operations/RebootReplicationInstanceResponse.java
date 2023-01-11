package openapisdk.models.operations;



public class RebootReplicationInstanceResponse {
    public String contentType;
    public RebootReplicationInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public RebootReplicationInstanceResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public openapisdk.models.shared.RebootReplicationInstanceResponse rebootReplicationInstanceResponse;
    public RebootReplicationInstanceResponse withRebootReplicationInstanceResponse(openapisdk.models.shared.RebootReplicationInstanceResponse rebootReplicationInstanceResponse) {
        this.rebootReplicationInstanceResponse = rebootReplicationInstanceResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public RebootReplicationInstanceResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public RebootReplicationInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}