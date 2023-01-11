package openapisdk.models.operations;



public class CloseTunnelResponse {
    public java.util.Map<String, Object> closeTunnelResponse;
    public CloseTunnelResponse withCloseTunnelResponse(java.util.Map<String, Object> closeTunnelResponse) {
        this.closeTunnelResponse = closeTunnelResponse;
        return this;
    }
    public String contentType;
    public CloseTunnelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public CloseTunnelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CloseTunnelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}