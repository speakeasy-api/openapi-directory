package openapisdk.models.operations;



public class GetSignInAttemptsResponse {
    public String contentType;
    public GetSignInAttemptsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSignInAttemptsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetSignInAttemptsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getSignInAttempts200ApplicationJSONAny;
    public GetSignInAttemptsResponse withGetSignInAttempts200ApplicationJsonAny(Object getSignInAttempts200ApplicationJSONAny) {
        this.getSignInAttempts200ApplicationJSONAny = getSignInAttempts200ApplicationJSONAny;
        return this;
    }
}