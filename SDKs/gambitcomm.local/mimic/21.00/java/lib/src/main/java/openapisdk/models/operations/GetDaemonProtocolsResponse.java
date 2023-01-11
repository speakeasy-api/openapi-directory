package openapisdk.models.operations;



public class GetDaemonProtocolsResponse {
    public String contentType;
    public GetDaemonProtocolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDaemonProtocolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> getDaemonProtocols200ApplicationJSONObject;
    public GetDaemonProtocolsResponse withGetDaemonProtocols200ApplicationJsonObject(java.util.Map<String, Integer> getDaemonProtocols200ApplicationJSONObject) {
        this.getDaemonProtocols200ApplicationJSONObject = getDaemonProtocols200ApplicationJSONObject;
        return this;
    }
}