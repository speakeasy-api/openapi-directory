package openapisdk.models.operations;



public class PostAccountsAccountIdAppsResponse {
    public String contentType;
    public PostAccountsAccountIdAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAccountsAccountIdAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AppResponse appResponse;
    public PostAccountsAccountIdAppsResponse withAppResponse(openapisdk.models.shared.AppResponse appResponse) {
        this.appResponse = appResponse;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostAccountsAccountIdAppsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}