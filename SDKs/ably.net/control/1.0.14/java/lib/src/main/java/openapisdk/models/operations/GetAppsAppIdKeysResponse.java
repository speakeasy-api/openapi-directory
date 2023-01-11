package openapisdk.models.operations;



public class GetAppsAppIdKeysResponse {
    public String contentType;
    public GetAppsAppIdKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsAppIdKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAppsAppIdKeysResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.KeyResponse[] keyResponses;
    public GetAppsAppIdKeysResponse withKeyResponses(openapisdk.models.shared.KeyResponse[] keyResponses) {
        this.keyResponses = keyResponses;
        return this;
    }
}