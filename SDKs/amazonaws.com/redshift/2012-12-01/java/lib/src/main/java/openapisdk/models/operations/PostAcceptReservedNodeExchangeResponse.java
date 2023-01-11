package openapisdk.models.operations;



public class PostAcceptReservedNodeExchangeResponse {
    public byte[] body;
    public PostAcceptReservedNodeExchangeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAcceptReservedNodeExchangeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAcceptReservedNodeExchangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}