package openapisdk.models.operations;



public class SearchUsersResponse {
    public String contentType;
    public SearchUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchUsers200ApplicationJson searchUsers200ApplicationJSONObject;
    public SearchUsersResponse withSearchUsers200ApplicationJsonObject(SearchUsers200ApplicationJson searchUsers200ApplicationJSONObject) {
        this.searchUsers200ApplicationJSONObject = searchUsers200ApplicationJSONObject;
        return this;
    }
    public SearchUsers503ApplicationJson searchUsers503ApplicationJSONObject;
    public SearchUsersResponse withSearchUsers503ApplicationJsonObject(SearchUsers503ApplicationJson searchUsers503ApplicationJSONObject) {
        this.searchUsers503ApplicationJSONObject = searchUsers503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public SearchUsersResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}