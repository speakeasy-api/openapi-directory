package openapisdk.models.operations;



public class RegistryGetApiSpecResponse {
    public Object apiSpec;
    public RegistryGetApiSpecResponse withApiSpec(Object apiSpec) {
        this.apiSpec = apiSpec;
        return this;
    }
    public String contentType;
    public RegistryGetApiSpecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryGetApiSpecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}