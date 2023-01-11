package openapisdk.models.operations;



public class CreateEndpointResponse {
    public Object accessDeniedFault;
    public CreateEndpointResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public CreateEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEndpointResponse createEndpointResponse;
    public CreateEndpointResponse withCreateEndpointResponse(openapisdk.models.shared.CreateEndpointResponse createEndpointResponse) {
        this.createEndpointResponse = createEndpointResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public CreateEndpointResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public CreateEndpointResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public CreateEndpointResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public CreateEndpointResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public CreateEndpointResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Object s3AccessDeniedFault;
    public CreateEndpointResponse withS3AccessDeniedFault(Object s3AccessDeniedFault) {
        this.s3AccessDeniedFault = s3AccessDeniedFault;
        return this;
    }
    public Long statusCode;
    public CreateEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}