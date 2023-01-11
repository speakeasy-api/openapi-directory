package openapisdk.models.operations;



public class QueryDbResponse {
    public String contentType;
    public QueryDbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public QueryDbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> queryDb200ApplicationJSONObject;
    public QueryDbResponse withQueryDb200ApplicationJsonObject(java.util.Map<String, Object> queryDb200ApplicationJSONObject) {
        this.queryDb200ApplicationJSONObject = queryDb200ApplicationJSONObject;
        return this;
    }
}