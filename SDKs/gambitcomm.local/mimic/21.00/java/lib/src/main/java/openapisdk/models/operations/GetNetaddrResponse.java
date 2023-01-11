package openapisdk.models.operations;



public class GetNetaddrResponse {
    public String contentType;
    public GetNetaddrResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNetaddrResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getNetaddr200ApplicationJSONObject;
    public GetNetaddrResponse withGetNetaddr200ApplicationJsonObject(java.util.Map<String, Integer> getNetaddr200ApplicationJSONObject) {
        this.getNetaddr200ApplicationJSONObject = getNetaddr200ApplicationJSONObject;
        return this;
    }
}