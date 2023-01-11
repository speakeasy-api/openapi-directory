package openapisdk.models.operations;



public class AccountGetLogsResponse {
    public String contentType;
    public AccountGetLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccountGetLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LogList logList;
    public AccountGetLogsResponse withLogList(openapisdk.models.shared.LogList logList) {
        this.logList = logList;
        return this;
    }
}