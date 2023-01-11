package openapisdk.models.operations;



public class PostTerminateClientVpnConnectionsResponse {
    public byte[] body;
    public PostTerminateClientVpnConnectionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostTerminateClientVpnConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTerminateClientVpnConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}