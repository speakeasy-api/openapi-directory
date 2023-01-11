package openapisdk.models.operations;



public class SearchLabelsResponse {
    public String contentType;
    public SearchLabelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchLabelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public SearchLabelsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public SearchLabels200ApplicationJson searchLabels200ApplicationJSONObject;
    public SearchLabelsResponse withSearchLabels200ApplicationJsonObject(SearchLabels200ApplicationJson searchLabels200ApplicationJSONObject) {
        this.searchLabels200ApplicationJSONObject = searchLabels200ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public SearchLabelsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}