package openapisdk.models.operations;



public class GetLogResponse {
    public String contentType;
    public GetLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getLog200ApplicationJSONObject;
    public GetLogResponse withGetLog200ApplicationJsonObject(java.util.Map<String, Integer> getLog200ApplicationJSONObject) {
        this.getLog200ApplicationJSONObject = getLog200ApplicationJSONObject;
        return this;
    }
}