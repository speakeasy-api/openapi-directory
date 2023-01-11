package openapisdk.models.operations;



public class GetReturnResponse {
    public String contentType;
    public GetReturnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetReturnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getReturn200ApplicationJSONObject;
    public GetReturnResponse withGetReturn200ApplicationJsonObject(java.util.Map<String, Integer> getReturn200ApplicationJSONObject) {
        this.getReturn200ApplicationJSONObject = getReturn200ApplicationJSONObject;
        return this;
    }
}