package openapisdk.models.operations;



public class RegistryRollbackApiSpecResponse {
    public Object apiSpec;
    public RegistryRollbackApiSpecResponse withApiSpec(Object apiSpec) {
        this.apiSpec = apiSpec;
        return this;
    }
    public String contentType;
    public RegistryRollbackApiSpecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryRollbackApiSpecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}