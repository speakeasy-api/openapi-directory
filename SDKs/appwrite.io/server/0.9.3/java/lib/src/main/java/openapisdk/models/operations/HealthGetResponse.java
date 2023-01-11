package openapisdk.models.operations;



public class HealthGetResponse {
    public String contentType;
    public HealthGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HealthGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}