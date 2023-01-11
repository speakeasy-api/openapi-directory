package openapisdk.models.operations;



public class CommLogsCreateResponse {
    public String contentType;
    public CommLogsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PhoneCallLog phoneCallLog;
    public CommLogsCreateResponse withPhoneCallLog(openapisdk.models.shared.PhoneCallLog phoneCallLog) {
        this.phoneCallLog = phoneCallLog;
        return this;
    }
    public Long statusCode;
    public CommLogsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}