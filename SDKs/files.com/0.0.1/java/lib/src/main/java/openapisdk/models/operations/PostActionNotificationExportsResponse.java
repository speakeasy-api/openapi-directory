package openapisdk.models.operations;



public class PostActionNotificationExportsResponse {
    public openapisdk.models.shared.ActionNotificationExportEntity actionNotificationExportEntity;
    public PostActionNotificationExportsResponse withActionNotificationExportEntity(openapisdk.models.shared.ActionNotificationExportEntity actionNotificationExportEntity) {
        this.actionNotificationExportEntity = actionNotificationExportEntity;
        return this;
    }
    public String contentType;
    public PostActionNotificationExportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostActionNotificationExportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}