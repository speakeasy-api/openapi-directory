package openapisdk.models.operations;



public class DescribeTunnelResponse {
    public String contentType;
    public DescribeTunnelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTunnelResponse describeTunnelResponse;
    public DescribeTunnelResponse withDescribeTunnelResponse(openapisdk.models.shared.DescribeTunnelResponse describeTunnelResponse) {
        this.describeTunnelResponse = describeTunnelResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTunnelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTunnelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}