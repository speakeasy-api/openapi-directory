package openapisdk.models.operations;



public class OpenTunnelResponse {
    public String contentType;
    public OpenTunnelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededException;
    public OpenTunnelResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.OpenTunnelResponse openTunnelResponse;
    public OpenTunnelResponse withOpenTunnelResponse(openapisdk.models.shared.OpenTunnelResponse openTunnelResponse) {
        this.openTunnelResponse = openTunnelResponse;
        return this;
    }
    public Long statusCode;
    public OpenTunnelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}