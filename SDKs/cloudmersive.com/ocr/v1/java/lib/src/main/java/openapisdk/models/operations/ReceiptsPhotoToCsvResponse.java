package openapisdk.models.operations;



public class ReceiptsPhotoToCsvResponse {
    public byte[] body;
    public ReceiptsPhotoToCsvResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReceiptsPhotoToCsvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> receiptsPhotoToCSV200ApplicationJSONObject;
    public ReceiptsPhotoToCsvResponse withReceiptsPhotoToCsv200ApplicationJsonObject(java.util.Map<String, Object> receiptsPhotoToCSV200ApplicationJSONObject) {
        this.receiptsPhotoToCSV200ApplicationJSONObject = receiptsPhotoToCSV200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, Object> receiptsPhotoToCSV200TextJSONObject;
    public ReceiptsPhotoToCsvResponse withReceiptsPhotoToCsv200TextJsonObject(java.util.Map<String, Object> receiptsPhotoToCSV200TextJSONObject) {
        this.receiptsPhotoToCSV200TextJSONObject = receiptsPhotoToCSV200TextJSONObject;
        return this;
    }
    public Long statusCode;
    public ReceiptsPhotoToCsvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}