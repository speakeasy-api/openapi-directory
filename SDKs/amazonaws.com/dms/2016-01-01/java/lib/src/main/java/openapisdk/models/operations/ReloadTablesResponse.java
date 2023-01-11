package openapisdk.models.operations;



public class ReloadTablesResponse {
    public String contentType;
    public ReloadTablesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceStateFault;
    public ReloadTablesResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public openapisdk.models.shared.ReloadTablesResponse reloadTablesResponse;
    public ReloadTablesResponse withReloadTablesResponse(openapisdk.models.shared.ReloadTablesResponse reloadTablesResponse) {
        this.reloadTablesResponse = reloadTablesResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public ReloadTablesResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public ReloadTablesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}