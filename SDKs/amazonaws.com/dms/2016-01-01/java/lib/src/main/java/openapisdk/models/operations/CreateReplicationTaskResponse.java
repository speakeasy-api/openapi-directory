package openapisdk.models.operations;



public class CreateReplicationTaskResponse {
    public Object accessDeniedFault;
    public CreateReplicationTaskResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public CreateReplicationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateReplicationTaskResponse createReplicationTaskResponse;
    public CreateReplicationTaskResponse withCreateReplicationTaskResponse(openapisdk.models.shared.CreateReplicationTaskResponse createReplicationTaskResponse) {
        this.createReplicationTaskResponse = createReplicationTaskResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public CreateReplicationTaskResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public CreateReplicationTaskResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public Object resourceAlreadyExistsFault;
    public CreateReplicationTaskResponse withResourceAlreadyExistsFault(Object resourceAlreadyExistsFault) {
        this.resourceAlreadyExistsFault = resourceAlreadyExistsFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public CreateReplicationTaskResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public CreateReplicationTaskResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public CreateReplicationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}