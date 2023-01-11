package openapisdk.models.operations;



public class GetWithdrawByoipCidrResponse {
    public byte[] body;
    public GetWithdrawByoipCidrResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetWithdrawByoipCidrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWithdrawByoipCidrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}