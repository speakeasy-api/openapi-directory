package openapisdk.models.operations;



public class AppsGetInstallationResponse {
    public String contentType;
    public AppsGetInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppsGetInstallation415ApplicationJson appsGetInstallation415ApplicationJSONObject;
    public AppsGetInstallationResponse withAppsGetInstallation415ApplicationJsonObject(AppsGetInstallation415ApplicationJson appsGetInstallation415ApplicationJSONObject) {
        this.appsGetInstallation415ApplicationJSONObject = appsGetInstallation415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsGetInstallationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.InstallationGhes2 installationGhes2;
    public AppsGetInstallationResponse withInstallationGhes2(openapisdk.models.shared.InstallationGhes2 installationGhes2) {
        this.installationGhes2 = installationGhes2;
        return this;
    }
}