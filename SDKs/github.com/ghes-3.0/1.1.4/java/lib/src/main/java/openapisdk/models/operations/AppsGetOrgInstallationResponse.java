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
    public openapisdk.models.shared.Installation installation;
    public AppsGetOrgInstallationResponse withInstallation(openapisdk.models.shared.Installation installation) {
        this.installation = installation;
        return this;
    }
}