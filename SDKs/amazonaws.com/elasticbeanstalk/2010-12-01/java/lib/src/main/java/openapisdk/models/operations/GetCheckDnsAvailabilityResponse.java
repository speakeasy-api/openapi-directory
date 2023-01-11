package openapisdk.models.operations;



public class GetCheckDnsAvailabilityResponse {
    public byte[] body;
    public GetCheckDnsAvailabilityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCheckDnsAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCheckDnsAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}