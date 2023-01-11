package openapisdk.models.operations;



public class GetNetdevResponse {
    public String contentType;
    public GetNetdevResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetdevResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getNetdev200ApplicationJSONObject;
    public GetNetdevResponse withGetNetdev200ApplicationJsonObject(java.util.Map<String, Integer> getNetdev200ApplicationJSONObject) {
        this.getNetdev200ApplicationJSONObject = getNetdev200ApplicationJSONObject;
        return this;
    }
}