package openapisdk.models.operations;



public class BalanceLookupResponse {
    public byte[] body;
    public BalanceLookupResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public BalanceLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BalanceLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}