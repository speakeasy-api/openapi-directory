package openapisdk.models.operations;



public class GetProjectUsernameProjectCheckoutKeyResponse {
    public String contentType;
    public GetProjectUsernameProjectCheckoutKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Key[] keys;
    public GetProjectUsernameProjectCheckoutKeyResponse withKeys(openapisdk.models.shared.Key[] keys) {
        this.keys = keys;
        return this;
    }
    public Long statusCode;
    public GetProjectUsernameProjectCheckoutKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}