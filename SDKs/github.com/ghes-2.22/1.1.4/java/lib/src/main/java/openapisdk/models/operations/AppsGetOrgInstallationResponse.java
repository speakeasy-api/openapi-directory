package openapisdk.models.operations;



public class AppsGetOrgInstallationResponse {
    public String contentType;
    public AppsGetOrgInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetOrgInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InstallationGhes2 installationGhes2;
    public AppsGetOrgInstallationResponse withInstallationGhes2(openapisdk.models.shared.InstallationGhes2 installationGhes2) {
        this.installationGhes2 = installationGhes2;
        return this;
    }
}