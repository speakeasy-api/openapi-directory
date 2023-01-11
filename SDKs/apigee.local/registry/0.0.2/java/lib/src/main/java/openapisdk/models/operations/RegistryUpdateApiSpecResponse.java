package openapisdk.models.operations;



public class RegistryUpdateApiSpecResponse {
    public Object apiSpec;
    public RegistryUpdateApiSpecResponse withApiSpec(Object apiSpec) {
        this.apiSpec = apiSpec;
        return this;
    }
    public String contentType;
    public RegistryUpdateApiSpecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryUpdateApiSpecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}