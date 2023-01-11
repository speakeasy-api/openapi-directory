package openapisdk.models.operations;



public class ReposSetStatusCheckContextsResponse {
    public String contentType;
    public ReposSetStatusCheckContextsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposSetStatusCheckContextsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposSetStatusCheckContextsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public String[] reposSetStatusCheckContexts200ApplicationJSONStrings;
    public ReposSetStatusCheckContextsResponse withReposSetStatusCheckContexts200ApplicationJsonStrings(String[] reposSetStatusCheckContexts200ApplicationJSONStrings) {
        this.reposSetStatusCheckContexts200ApplicationJSONStrings = reposSetStatusCheckContexts200ApplicationJSONStrings;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposSetStatusCheckContextsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}