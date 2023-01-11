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
    public openapisdk.models.shared.Installation[] installations;
    public AppsListInstallationsResponse withInstallations(openapisdk.models.shared.Installation[] installations) {
        this.installations = installations;
        return this;
    }
}