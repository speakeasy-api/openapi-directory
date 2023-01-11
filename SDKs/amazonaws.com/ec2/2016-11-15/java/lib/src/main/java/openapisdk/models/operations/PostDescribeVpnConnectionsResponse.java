package openapisdk.models.operations;



public class PostDescribeVpnConnectionsResponse {
    public byte[] body;
    public PostDescribeVpnConnectionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDescribeVpnConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDescribeVpnConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}