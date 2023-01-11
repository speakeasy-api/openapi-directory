package openapisdk.models.operations;



public class PostProjectUsernameProjectCheckoutKeyResponse {
    public String contentType;
    public PostProjectUsernameProjectCheckoutKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Key key;
    public PostProjectUsernameProjectCheckoutKeyResponse withKey(openapisdk.models.shared.Key key) {
        this.key = key;
        return this;
    }
    public Long statusCode;
    public PostProjectUsernameProjectCheckoutKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}