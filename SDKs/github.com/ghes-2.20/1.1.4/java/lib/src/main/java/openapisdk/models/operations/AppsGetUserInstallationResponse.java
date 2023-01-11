package openapisdk.models.operations;



public class AppsGetUserInstallationResponse {
    public String contentType;
    public AppsGetUserInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetUserInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InstallationGhes2 installationGhes2;
    public AppsGetUserInstallationResponse withInstallationGhes2(openapisdk.models.shared.InstallationGhes2 installationGhes2) {
        this.installationGhes2 = installationGhes2;
        return this;
    }
}