package openapisdk.models.operations;



public class RegistryGetStatusResponse {
    public String contentType;
    public RegistryGetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object status;
    public RegistryGetStatusResponse withStatus(Object status) {
        this.status = status;
        return this;
    }
    public Long statusCode;
    public RegistryGetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}