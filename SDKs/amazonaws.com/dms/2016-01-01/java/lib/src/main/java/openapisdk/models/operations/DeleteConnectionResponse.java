package openapisdk.models.operations;



public class DeleteConnectionResponse {
    public Object accessDeniedFault;
    public DeleteConnectionResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteConnectionResponse deleteConnectionResponse;
    public DeleteConnectionResponse withDeleteConnectionResponse(openapisdk.models.shared.DeleteConnectionResponse deleteConnectionResponse) {
        this.deleteConnectionResponse = deleteConnectionResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DeleteConnectionResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DeleteConnectionResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}