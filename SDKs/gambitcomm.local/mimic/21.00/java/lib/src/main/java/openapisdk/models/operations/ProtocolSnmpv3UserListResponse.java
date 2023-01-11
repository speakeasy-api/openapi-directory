package openapisdk.models.operations;



public class ProtocolSnmpv3UserListResponse {
    public String contentType;
    public ProtocolSnmpv3UserListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolSnmpv3UserListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] protocolSnmpv3UserList200ApplicationJSONStrings;
    public ProtocolSnmpv3UserListResponse withProtocolSnmpv3UserList200ApplicationJsonStrings(String[] protocolSnmpv3UserList200ApplicationJSONStrings) {
        this.protocolSnmpv3UserList200ApplicationJSONStrings = protocolSnmpv3UserList200ApplicationJSONStrings;
        return this;
    }
}