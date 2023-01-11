package openapisdk.models.operations;



public class PutAccountPreferencesResponse {
    public String contentType;
    public PutAccountPreferencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutAccountPreferencesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.PutAccountPreferencesResponse putAccountPreferencesResponse;
    public PutAccountPreferencesResponse withPutAccountPreferencesResponse(openapisdk.models.shared.PutAccountPreferencesResponse putAccountPreferencesResponse) {
        this.putAccountPreferencesResponse = putAccountPreferencesResponse;
        return this;
    }
    public Long statusCode;
    public PutAccountPreferencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}