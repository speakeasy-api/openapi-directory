package openapisdk.models.operations;



public class TrapConfigListResponse {
    public String contentType;
    public TrapConfigListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrapConfigListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TrapDest[] trapDests;
    public TrapConfigListResponse withTrapDests(openapisdk.models.shared.TrapDest[] trapDests) {
        this.trapDests = trapDests;
        return this;
    }
}