package openapisdk.models.operations;



public class AppsCreateInstallationAccessTokenResponse {
    public String contentType;
    public AppsCreateInstallationAccessTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsCreateInstallationAccessTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AppsCreateInstallationAccessToken415ApplicationJson appsCreateInstallationAccessToken415ApplicationJSONObject;
    public AppsCreateInstallationAccessTokenResponse withAppsCreateInstallationAccessToken415ApplicationJsonObject(AppsCreateInstallationAccessToken415ApplicationJson appsCreateInstallationAccessToken415ApplicationJSONObject) {
        this.appsCreateInstallationAccessToken415ApplicationJSONObject = appsCreateInstallationAccessToken415ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsCreateInstallationAccessTokenResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.InstallationToken installationToken;
    public AppsCreateInstallationAccessTokenResponse withInstallationToken(openapisdk.models.shared.InstallationToken installationToken) {
        this.installationToken = installationToken;
        return this;
    }
    public openapisdk.models.shared.ValidationError validationError;
    public AppsCreateInstallationAccessTokenResponse withValidationError(openapisdk.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
}