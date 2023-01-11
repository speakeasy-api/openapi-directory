package openapisdk.models.operations;



public class GetActionNotificationExportResultsResponse {
    public openapisdk.models.shared.ActionNotificationExportResultEntity[] actionNotificationExportResultEntities;
    public GetActionNotificationExportResultsResponse withActionNotificationExportResultEntities(openapisdk.models.shared.ActionNotificationExportResultEntity[] actionNotificationExportResultEntities) {
        this.actionNotificationExportResultEntities = actionNotificationExportResultEntities;
        return this;
    }
    public String contentType;
    public GetActionNotificationExportResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetActionNotificationExportResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}