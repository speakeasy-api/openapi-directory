package openapisdk.models.operations;



public class DecodeResponse {
    public openapisdk.models.shared.Build build;
    public DecodeResponse withBuild(openapisdk.models.shared.Build build) {
        this.build = build;
        return this;
    }
    public String contentType;
    public DecodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DecodeResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DecodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}