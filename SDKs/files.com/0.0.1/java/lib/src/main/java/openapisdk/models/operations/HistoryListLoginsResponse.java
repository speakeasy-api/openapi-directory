package openapisdk.models.operations;



public class HistoryListLoginsResponse {
    public openapisdk.models.shared.ActionEntity[] actionEntities;
    public HistoryListLoginsResponse withActionEntities(openapisdk.models.shared.ActionEntity[] actionEntities) {
        this.actionEntities = actionEntities;
        return this;
    }
    public String contentType;
    public HistoryListLoginsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HistoryListLoginsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}