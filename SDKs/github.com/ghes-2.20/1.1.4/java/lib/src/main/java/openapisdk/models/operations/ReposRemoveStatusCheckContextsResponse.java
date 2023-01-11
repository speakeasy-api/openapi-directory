package openapisdk.models.operations;



public class ReposRemoveStatusCheckContextsResponse {
    public String contentType;
    public ReposRemoveStatusCheckContextsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposRemoveStatusCheckContextsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposRemoveStatusCheckContextsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public String[] reposRemoveStatusCheckContexts200ApplicationJSONStrings;
    public ReposRemoveStatusCheckContextsResponse withReposRemoveStatusCheckContexts200ApplicationJsonStrings(String[] reposRemoveStatusCheckContexts200ApplicationJSONStrings) {
        this.reposRemoveStatusCheckContexts200ApplicationJSONStrings = reposRemoveStatusCheckContexts200ApplicationJSONStrings;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposRemoveStatusCheckContextsResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}