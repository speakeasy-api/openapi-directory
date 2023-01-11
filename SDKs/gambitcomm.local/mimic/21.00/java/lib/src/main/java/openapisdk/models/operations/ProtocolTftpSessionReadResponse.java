package openapisdk.models.operations;



public class ProtocolTftpSessionReadResponse {
    public String contentType;
    public ProtocolTftpSessionReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTftpSessionReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolTftpSessionRead200ApplicationJSONInt32Integers;
    public ProtocolTftpSessionReadResponse withProtocolTftpSessionRead200ApplicationJsonInt32Integers(Integer[] protocolTftpSessionRead200ApplicationJSONInt32Integers) {
        this.protocolTftpSessionRead200ApplicationJSONInt32Integers = protocolTftpSessionRead200ApplicationJSONInt32Integers;
        return this;
    }
}