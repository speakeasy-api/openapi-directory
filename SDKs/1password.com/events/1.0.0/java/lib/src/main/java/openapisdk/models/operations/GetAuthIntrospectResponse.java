package openapisdk.models.operations;



public class GetAuthIntrospectResponse {
    public String contentType;
    public GetAuthIntrospectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAuthIntrospectResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Introspection introspection;
    public GetAuthIntrospectResponse withIntrospection(openapisdk.models.shared.Introspection introspection) {
        this.introspection = introspection;
        return this;
    }
    public Long statusCode;
    public GetAuthIntrospectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}