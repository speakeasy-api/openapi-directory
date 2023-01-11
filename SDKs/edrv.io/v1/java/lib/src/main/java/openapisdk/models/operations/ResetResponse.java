package openapisdk.models.operations;



public class ResetResponse {
    public String contentType;
    public ResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Reset201ApplicationJson reset201ApplicationJSONObject;
    public ResetResponse withReset201ApplicationJsonObject(Reset201ApplicationJson reset201ApplicationJSONObject) {
        this.reset201ApplicationJSONObject = reset201ApplicationJSONObject;
        return this;
    }
}