package openapisdk.models.operations;



public class DecodeViaEpiResponse {
    public openapisdk.models.shared.Build build;
    public DecodeViaEpiResponse withBuild(openapisdk.models.shared.Build build) {
        this.build = build;
        return this;
    }
    public String contentType;
    public DecodeViaEpiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DecodeViaEpiResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DecodeViaEpiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}