package openapisdk.models.operations;



public class GetMeResponse {
    public String contentType;
    public GetMeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Me me;
    public GetMeResponse withMe(openapisdk.models.shared.Me me) {
        this.me = me;
        return this;
    }
}