package openapisdk.models.operations;



public class GetModifyVpnConnectionResponse {
    public byte[] body;
    public GetModifyVpnConnectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetModifyVpnConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetModifyVpnConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}