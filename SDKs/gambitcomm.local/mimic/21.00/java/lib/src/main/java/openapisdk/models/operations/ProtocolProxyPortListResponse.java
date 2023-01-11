package openapisdk.models.operations;



public class ProtocolProxyPortListResponse {
    public String contentType;
    public ProtocolProxyPortListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolProxyPortListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolProxyPortList200ApplicationJSONInt32Integers;
    public ProtocolProxyPortListResponse withProtocolProxyPortList200ApplicationJsonInt32Integers(Integer[] protocolProxyPortList200ApplicationJSONInt32Integers) {
        this.protocolProxyPortList200ApplicationJSONInt32Integers = protocolProxyPortList200ApplicationJSONInt32Integers;
        return this;
    }
}