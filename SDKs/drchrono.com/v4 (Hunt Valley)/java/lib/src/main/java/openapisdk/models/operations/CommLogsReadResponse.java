package openapisdk.models.operations;



public class CommLogsReadResponse {
    public String contentType;
    public CommLogsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhoneCallLog phoneCallLog;
    public CommLogsReadResponse withPhoneCallLog(openapisdk.models.shared.PhoneCallLog phoneCallLog) {
        this.phoneCallLog = phoneCallLog;
        return this;
    }
    public Long statusCode;
    public CommLogsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}