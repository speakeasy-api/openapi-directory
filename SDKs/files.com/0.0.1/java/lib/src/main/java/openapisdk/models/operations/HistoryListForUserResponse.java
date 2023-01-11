package openapisdk.models.operations;



public class HistoryListForUserResponse {
    public openapisdk.models.shared.ActionEntity[] actionEntities;
    public HistoryListForUserResponse withActionEntities(openapisdk.models.shared.ActionEntity[] actionEntities) {
        this.actionEntities = actionEntities;
        return this;
    }
    public String contentType;
    public HistoryListForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public HistoryListForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}