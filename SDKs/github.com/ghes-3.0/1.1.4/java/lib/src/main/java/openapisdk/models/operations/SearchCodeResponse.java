package openapisdk.models.operations;



public class SearchCodeResponse {
    public String contentType;
    public SearchCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public SearchCodeResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public SearchCode200ApplicationJson searchCode200ApplicationJSONObject;
    public SearchCodeResponse withSearchCode200ApplicationJsonObject(SearchCode200ApplicationJson searchCode200ApplicationJSONObject) {
        this.searchCode200ApplicationJSONObject = searchCode200ApplicationJSONObject;
        return this;
    }
    public SearchCode503ApplicationJson searchCode503ApplicationJSONObject;
    public SearchCodeResponse withSearchCode503ApplicationJsonObject(SearchCode503ApplicationJson searchCode503ApplicationJSONObject) {
        this.searchCode503ApplicationJSONObject = searchCode503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public SearchCodeResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}