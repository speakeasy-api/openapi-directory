package openapisdk.models.operations;



public class AppsListInstallationsResponse {
    public String contentType;
    public AppsListInstallationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AppsListInstallationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AppsListInstallationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InstallationGhes2[] installationGhes2s;
    public AppsListInstallationsResponse withInstallationGhes2s(openapisdk.models.shared.InstallationGhes2[] installationGhes2s) {
        this.installationGhes2s = installationGhes2s;
        return this;
    }
}