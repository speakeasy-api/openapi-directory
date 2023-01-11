package openapisdk.models.operations;



public class ReposCreatePagesSiteResponse {
    public String contentType;
    public ReposCreatePagesSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposCreatePagesSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposCreatePagesSiteResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Page page;
    public ReposCreatePagesSiteResponse withPage(openapisdk.models.shared.Page page) {
        this.page = page;
        return this;
    }
    public ReposCreatePagesSite415ApplicationJson reposCreatePagesSite415ApplicationJSONObject;
    public ReposCreatePagesSiteResponse withReposCreatePagesSite415ApplicationJsonObject(ReposCreatePagesSite415ApplicationJson reposCreatePagesSite415ApplicationJSONObject) {
        this.reposCreatePagesSite415ApplicationJSONObject = reposCreatePagesSite415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public ReposCreatePagesSiteResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}