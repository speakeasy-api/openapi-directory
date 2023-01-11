package openapisdk.models.operations;



public class GetClientsResponse {
    public String contentType;
    public GetClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getClients200ApplicationJSONObject;
    public GetClientsResponse withGetClients200ApplicationJsonObject(java.util.Map<String, Integer> getClients200ApplicationJSONObject) {
        this.getClients200ApplicationJSONObject = getClients200ApplicationJSONObject;
        return this;
    }
}