package openapisdk.models.operations;



public class CommLogsListResponse {
    public String contentType;
    public CommLogsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CommLogsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CommLogsList200ApplicationJson commLogsList200ApplicationJSONObject;
    public CommLogsListResponse withCommLogsList200ApplicationJsonObject(CommLogsList200ApplicationJson commLogsList200ApplicationJSONObject) {
        this.commLogsList200ApplicationJSONObject = commLogsList200ApplicationJSONObject;
        return this;
    }
}