package openapisdk.models.operations;



public class GetInstallStatusResponse {
    public String contentType;
    public GetInstallStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InstallStatus installStatus;
    public GetInstallStatusResponse withInstallStatus(openapisdk.models.shared.InstallStatus installStatus) {
        this.installStatus = installStatus;
        return this;
    }
    public Long statusCode;
    public GetInstallStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getInstallStatusDefaultApplicationJSONString;
    public GetInstallStatusResponse withGetInstallStatusDefaultApplicationJsonString(String getInstallStatusDefaultApplicationJSONString) {
        this.getInstallStatusDefaultApplicationJSONString = getInstallStatusDefaultApplicationJSONString;
        return this;
    }
}