package openapisdk.models.operations;



public class AppsListInstallationReposForAuthenticatedUserResponse {
    public String contentType;
    public AppsListInstallationReposForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListInstallationReposForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListInstallationReposForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppsListInstallationReposForAuthenticatedUser200ApplicationJson appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject;
    public AppsListInstallationReposForAuthenticatedUserResponse withAppsListInstallationReposForAuthenticatedUser200ApplicationJsonObject(AppsListInstallationReposForAuthenticatedUser200ApplicationJson appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject) {
        this.appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject = appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListInstallationReposForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}