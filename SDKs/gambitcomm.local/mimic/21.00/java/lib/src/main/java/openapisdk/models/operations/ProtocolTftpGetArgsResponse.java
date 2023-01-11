package openapisdk.models.operations;



public class ProtocolTftpGetArgsResponse {
    public String contentType;
    public ProtocolTftpGetArgsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTftpGetArgsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> protocolTftpGetArgs200ApplicationJSONObject;
    public ProtocolTftpGetArgsResponse withProtocolTftpGetArgs200ApplicationJsonObject(java.util.Map<String, Object> protocolTftpGetArgs200ApplicationJSONObject) {
        this.protocolTftpGetArgs200ApplicationJSONObject = protocolTftpGetArgs200ApplicationJSONObject;
        return this;
    }
}