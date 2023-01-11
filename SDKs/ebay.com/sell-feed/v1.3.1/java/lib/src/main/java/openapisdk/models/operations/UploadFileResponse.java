package openapisdk.models.operations;



public class UploadFileResponse {
    public String contentType;
    public UploadFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UploadFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> uploadFile200ApplicationJSONObject;
    public UploadFileResponse withUploadFile200ApplicationJsonObject(java.util.Map<String, Object> uploadFile200ApplicationJSONObject) {
        this.uploadFile200ApplicationJSONObject = uploadFile200ApplicationJSONObject;
        return this;
    }
}