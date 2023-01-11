package openapisdk.models.operations;



public class AppsGetRepoInstallationResponse {
    public String contentType;
    public AppsGetRepoInstallationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppsGetRepoInstallationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public AppsGetRepoInstallationResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.InstallationGhes2 installationGhes2;
    public AppsGetRepoInstallationResponse withInstallationGhes2(openapisdk.models.shared.InstallationGhes2 installationGhes2) {
        this.installationGhes2 = installationGhes2;
        return this;
    }
}