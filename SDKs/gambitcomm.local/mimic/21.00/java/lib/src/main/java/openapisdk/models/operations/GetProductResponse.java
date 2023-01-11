package openapisdk.models.operations;



public class GetProductResponse {
    public String contentType;
    public GetProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getProduct200ApplicationJSONObject;
    public GetProductResponse withGetProduct200ApplicationJsonObject(java.util.Map<String, Integer> getProduct200ApplicationJSONObject) {
        this.getProduct200ApplicationJSONObject = getProduct200ApplicationJSONObject;
        return this;
    }
}