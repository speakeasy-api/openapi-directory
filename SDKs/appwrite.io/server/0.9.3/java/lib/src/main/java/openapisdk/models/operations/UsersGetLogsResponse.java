package openapisdk.models.operations;



public class UsersGetLogsResponse {
    public String contentType;
    public UsersGetLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersGetLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LogList logList;
    public UsersGetLogsResponse withLogList(openapisdk.models.shared.LogList logList) {
        this.logList = logList;
        return this;
    }
}