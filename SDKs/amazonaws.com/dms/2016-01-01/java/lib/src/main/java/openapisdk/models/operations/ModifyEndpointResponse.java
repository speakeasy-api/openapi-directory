package openapisdk.models.operations;



public class ModifyEndpointResponse {
    public Object accessDeniedFault;
    public ModifyEndpointResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public ModifyEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public ModifyEndpointResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public ModifyEndpointResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public openapisdk.models.shared.ModifyEndpointResponse modifyEndpointResponse;
    public ModifyEndpointResponse withModifyEndpointResponse(openapisdk.models.shared.ModifyEndpointResponse modifyEndpointResponse) {
        this.modifyEndpointResponse = modifyEndpointResponse;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public ModifyEndpointResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public ModifyEndpointResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ModifyEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}