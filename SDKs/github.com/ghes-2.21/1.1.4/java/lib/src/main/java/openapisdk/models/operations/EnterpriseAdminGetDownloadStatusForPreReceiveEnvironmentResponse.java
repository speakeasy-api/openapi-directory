package openapisdk.models.operations;



public class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse {
    public String contentType;
    public EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus preReceiveEnvironmentDownloadStatus;
    public EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse withPreReceiveEnvironmentDownloadStatus(openapisdk.models.shared.PreReceiveEnvironmentDownloadStatus preReceiveEnvironmentDownloadStatus) {
        this.preReceiveEnvironmentDownloadStatus = preReceiveEnvironmentDownloadStatus;
        return this;
    }
}