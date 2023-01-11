package openapisdk.models.operations;



public class NetworkResponse {
    public String contentType;
    public NetworkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public NetworkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}