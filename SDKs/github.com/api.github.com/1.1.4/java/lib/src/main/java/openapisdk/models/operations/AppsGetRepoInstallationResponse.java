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
    public openapisdk.models.shared.Installation installation;
    public AppsGetRepoInstallationResponse withInstallation(openapisdk.models.shared.Installation installation) {
        this.installation = installation;
        return this;
    }
}