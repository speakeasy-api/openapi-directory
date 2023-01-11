package openapisdk.models.operations;



public class RegistryUpdateApiVersionResponse {
    public Object apiVersion;
    public RegistryUpdateApiVersionResponse withApiVersion(Object apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    public String contentType;
    public RegistryUpdateApiVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryUpdateApiVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}