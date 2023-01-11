package openapisdk.models.operations;



public class DeleteEndpointResponse {
    public String contentType;
    public DeleteEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteEndpointResponse deleteEndpointResponse;
    public DeleteEndpointResponse withDeleteEndpointResponse(openapisdk.models.shared.DeleteEndpointResponse deleteEndpointResponse) {
        this.deleteEndpointResponse = deleteEndpointResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteEndpointResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteEndpointResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}