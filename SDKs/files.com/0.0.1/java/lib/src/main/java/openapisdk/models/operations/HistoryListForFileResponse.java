package openapisdk.models.operations;



public class HistoryListForFileResponse {
    public openapisdk.models.shared.ActionEntity[] actionEntities;
    public HistoryListForFileResponse withActionEntities(openapisdk.models.shared.ActionEntity[] actionEntities) {
        this.actionEntities = actionEntities;
        return this;
    }
    public String contentType;
    public HistoryListForFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HistoryListForFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}