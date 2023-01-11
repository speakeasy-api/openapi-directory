package openapisdk.models.operations;



public class RegistryGetApiResponse {
    public Object api;
    public RegistryGetApiResponse withApi(Object api) {
        this.api = api;
        return this;
    }
    public String contentType;
    public RegistryGetApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RegistryGetApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}