package openapisdk.models.operations;



public class GetAccountsAccountIdAppsResponse {
    public String contentType;
    public GetAccountsAccountIdAppsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountsAccountIdAppsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AppResponse[] appResponses;
    public GetAccountsAccountIdAppsResponse withAppResponses(openapisdk.models.shared.AppResponse[] appResponses) {
        this.appResponses = appResponses;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAccountsAccountIdAppsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}