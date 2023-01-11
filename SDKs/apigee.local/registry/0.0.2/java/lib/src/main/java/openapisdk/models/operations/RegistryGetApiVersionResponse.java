package openapisdk.models.operations;



public class RegistryGetApiVersionResponse {
    public Object apiVersion;
    public RegistryGetApiVersionResponse withApiVersion(Object apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    public String contentType;
    public RegistryGetApiVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryGetApiVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}