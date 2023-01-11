package openapisdk.models.operations;



public class MgetInfoResponse {
    public String contentType;
    public MgetInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MgetInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] mgetInfo200ApplicationJSONObjects;
    public MgetInfoResponse withMgetInfo200ApplicationJsonObjects(java.util.Map<String, Object>[] mgetInfo200ApplicationJSONObjects) {
        this.mgetInfo200ApplicationJSONObjects = mgetInfo200ApplicationJSONObjects;
        return this;
    }
}