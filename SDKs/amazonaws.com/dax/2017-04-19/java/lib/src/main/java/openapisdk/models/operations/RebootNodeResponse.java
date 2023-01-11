package openapisdk.models.operations;



public class RebootNodeResponse {
    public Object clusterNotFoundFault;
    public RebootNodeResponse withClusterNotFoundFault(Object clusterNotFoundFault) {
        this.clusterNotFoundFault = clusterNotFoundFault;
        return this;
    }
    public String contentType;
    public RebootNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidClusterStateFault;
    public RebootNodeResponse withInvalidClusterStateFault(Object invalidClusterStateFault) {
        this.invalidClusterStateFault = invalidClusterStateFault;
        return this;
    }
    public Object invalidParameterCombinationException;
    public RebootNodeResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidParameterValueException;
    public RebootNodeResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object nodeNotFoundFault;
    public RebootNodeResponse withNodeNotFoundFault(Object nodeNotFoundFault) {
        this.nodeNotFoundFault = nodeNotFoundFault;
        return this;
    }
    public openapisdk.models.shared.RebootNodeResponse rebootNodeResponse;
    public RebootNodeResponse withRebootNodeResponse(openapisdk.models.shared.RebootNodeResponse rebootNodeResponse) {
        this.rebootNodeResponse = rebootNodeResponse;
        return this;
    }
    public Object serviceLinkedRoleNotFoundFault;
    public RebootNodeResponse withServiceLinkedRoleNotFoundFault(Object serviceLinkedRoleNotFoundFault) {
        this.serviceLinkedRoleNotFoundFault = serviceLinkedRoleNotFoundFault;
        return this;
    }
    public Long statusCode;
    public RebootNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}