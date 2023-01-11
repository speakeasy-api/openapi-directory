package openapisdk.models.operations;



public class HistoryListResponse {
    public openapisdk.models.shared.ActionEntity[] actionEntities;
    public HistoryListResponse withActionEntities(openapisdk.models.shared.ActionEntity[] actionEntities) {
        this.actionEntities = actionEntities;
        return this;
    }
    public String contentType;
    public HistoryListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HistoryListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}