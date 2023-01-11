package openapisdk.models.operations;



public class ReposDeletePagesSiteResponse {
    public String contentType;
    public ReposDeletePagesSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposDeletePagesSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposDeletePagesSiteResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ReposDeletePagesSite415ApplicationJson reposDeletePagesSite415ApplicationJSONObject;
    public ReposDeletePagesSiteResponse withReposDeletePagesSite415ApplicationJsonObject(ReposDeletePagesSite415ApplicationJson reposDeletePagesSite415ApplicationJSONObject) {
        this.reposDeletePagesSite415ApplicationJSONObject = reposDeletePagesSite415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposDeletePagesSiteResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}