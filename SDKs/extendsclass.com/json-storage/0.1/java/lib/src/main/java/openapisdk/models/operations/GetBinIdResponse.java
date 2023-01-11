package openapisdk.models.operations;



public class GetBinIdResponse {
    public String contentType;
    public GetBinIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object error;
    public GetBinIdResponse withError(Object error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetBinIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> getBinId200ApplicationJSONObject;
    public GetBinIdResponse withGetBinId200ApplicationJsonObject(java.util.Map<String, Object> getBinId200ApplicationJSONObject) {
        this.getBinId200ApplicationJSONObject = getBinId200ApplicationJSONObject;
        return this;
    }
}