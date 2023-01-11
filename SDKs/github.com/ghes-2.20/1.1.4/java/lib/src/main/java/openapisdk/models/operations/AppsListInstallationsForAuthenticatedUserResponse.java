package openapisdk.models.operations;



public class AppsListInstallationsForAuthenticatedUserResponse {
    public String contentType;
    public AppsListInstallationsForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListInstallationsForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListInstallationsForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppsListInstallationsForAuthenticatedUser200ApplicationJson appsListInstallationsForAuthenticatedUser200ApplicationJSONObject;
    public AppsListInstallationsForAuthenticatedUserResponse withAppsListInstallationsForAuthenticatedUser200ApplicationJsonObject(AppsListInstallationsForAuthenticatedUser200ApplicationJson appsListInstallationsForAuthenticatedUser200ApplicationJSONObject) {
        this.appsListInstallationsForAuthenticatedUser200ApplicationJSONObject = appsListInstallationsForAuthenticatedUser200ApplicationJSONObject;
        return this;
    }
    public AppsListInstallationsForAuthenticatedUser415ApplicationJson appsListInstallationsForAuthenticatedUser415ApplicationJSONObject;
    public AppsListInstallationsForAuthenticatedUserResponse withAppsListInstallationsForAuthenticatedUser415ApplicationJsonObject(AppsListInstallationsForAuthenticatedUser415ApplicationJson appsListInstallationsForAuthenticatedUser415ApplicationJSONObject) {
        this.appsListInstallationsForAuthenticatedUser415ApplicationJSONObject = appsListInstallationsForAuthenticatedUser415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListInstallationsForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}