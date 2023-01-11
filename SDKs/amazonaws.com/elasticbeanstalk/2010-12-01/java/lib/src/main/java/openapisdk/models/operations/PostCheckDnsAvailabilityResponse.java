package openapisdk.models.operations;



public class PostCheckDnsAvailabilityResponse {
    public byte[] body;
    public PostCheckDnsAvailabilityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCheckDnsAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCheckDnsAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}