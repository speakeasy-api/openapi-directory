package openapisdk.models.operations;



public class HistoryListForFolderResponse {
    public openapisdk.models.shared.ActionEntity[] actionEntities;
    public HistoryListForFolderResponse withActionEntities(openapisdk.models.shared.ActionEntity[] actionEntities) {
        this.actionEntities = actionEntities;
        return this;
    }
    public String contentType;
    public HistoryListForFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HistoryListForFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}