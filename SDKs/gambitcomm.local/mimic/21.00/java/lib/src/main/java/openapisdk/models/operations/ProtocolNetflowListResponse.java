package openapisdk.models.operations;



public class ProtocolNetflowListResponse {
    public String contentType;
    public ProtocolNetflowListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolNetflowListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object>[] protocolNetflowList200ApplicationJSONObjects;
    public ProtocolNetflowListResponse withProtocolNetflowList200ApplicationJsonObjects(java.util.Map<String, Object>[] protocolNetflowList200ApplicationJSONObjects) {
        this.protocolNetflowList200ApplicationJSONObjects = protocolNetflowList200ApplicationJSONObjects;
        return this;
    }
}