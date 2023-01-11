package openapisdk.models.operations;



public class GetActionNotificationExportsIdResponse {
    public openapisdk.models.shared.ActionNotificationExportEntity actionNotificationExportEntity;
    public GetActionNotificationExportsIdResponse withActionNotificationExportEntity(openapisdk.models.shared.ActionNotificationExportEntity actionNotificationExportEntity) {
        this.actionNotificationExportEntity = actionNotificationExportEntity;
        return this;
    }
    public String contentType;
    public GetActionNotificationExportsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetActionNotificationExportsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}