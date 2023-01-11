package openapisdk.models.operations;



public class AppsListReposAccessibleToInstallationResponse {
    public String contentType;
    public AppsListReposAccessibleToInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListReposAccessibleToInstallationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListReposAccessibleToInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppsListReposAccessibleToInstallation200ApplicationJson appsListReposAccessibleToInstallation200ApplicationJSONObject;
    public AppsListReposAccessibleToInstallationResponse withAppsListReposAccessibleToInstallation200ApplicationJsonObject(AppsListReposAccessibleToInstallation200ApplicationJson appsListReposAccessibleToInstallation200ApplicationJSONObject) {
        this.appsListReposAccessibleToInstallation200ApplicationJSONObject = appsListReposAccessibleToInstallation200ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsListReposAccessibleToInstallationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
}