package openapisdk.models.operations;



public class UnlockconnectorResponse {
    public String contentType;
    public UnlockconnectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnlockconnectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Unlockconnector201ApplicationJson unlockconnector201ApplicationJSONObject;
    public UnlockconnectorResponse withUnlockconnector201ApplicationJsonObject(Unlockconnector201ApplicationJson unlockconnector201ApplicationJSONObject) {
        this.unlockconnector201ApplicationJSONObject = unlockconnector201ApplicationJSONObject;
        return this;
    }
}