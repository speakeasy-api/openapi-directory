package openapisdk.models.operations;



public class RefreshSchemasResponse {
    public String contentType;
    public RefreshSchemasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public RefreshSchemasResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object kmsKeyNotAccessibleFault;
    public RefreshSchemasResponse withKmsKeyNotAccessibleFault(Object kmsKeyNotAccessibleFault) {
        this.kmsKeyNotAccessibleFault = kmsKeyNotAccessibleFault;
        return this;
    }
    public openapisdk.models.shared.RefreshSchemasResponse refreshSchemasResponse;
    public RefreshSchemasResponse withRefreshSchemasResponse(openapisdk.models.shared.RefreshSchemasResponse refreshSchemasResponse) {
        this.refreshSchemasResponse = refreshSchemasResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public RefreshSchemasResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Object resourceQuotaExceededFault;
    public RefreshSchemasResponse withResourceQuotaExceededFault(Object resourceQuotaExceededFault) {
        this.resourceQuotaExceededFault = resourceQuotaExceededFault;
        return this;
    }
    public Long statusCode;
    public RefreshSchemasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}