package openapisdk.models.operations;



public class SearchReposResponse {
    public String contentType;
    public SearchReposResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchReposResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchRepos200ApplicationJson searchRepos200ApplicationJSONObject;
    public SearchReposResponse withSearchRepos200ApplicationJsonObject(SearchRepos200ApplicationJson searchRepos200ApplicationJSONObject) {
        this.searchRepos200ApplicationJSONObject = searchRepos200ApplicationJSONObject;
        return this;
    }
    public SearchRepos503ApplicationJson searchRepos503ApplicationJSONObject;
    public SearchReposResponse withSearchRepos503ApplicationJsonObject(SearchRepos503ApplicationJson searchRepos503ApplicationJSONObject) {
        this.searchRepos503ApplicationJSONObject = searchRepos503ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public SearchReposResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}