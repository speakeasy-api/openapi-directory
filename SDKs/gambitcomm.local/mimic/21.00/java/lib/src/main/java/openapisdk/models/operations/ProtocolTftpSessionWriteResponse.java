package openapisdk.models.operations;



public class ProtocolTftpSessionWriteResponse {
    public String contentType;
    public ProtocolTftpSessionWriteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ProtocolTftpSessionWriteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer[] protocolTftpSessionWrite200ApplicationJSONInt32Integers;
    public ProtocolTftpSessionWriteResponse withProtocolTftpSessionWrite200ApplicationJsonInt32Integers(Integer[] protocolTftpSessionWrite200ApplicationJSONInt32Integers) {
        this.protocolTftpSessionWrite200ApplicationJSONInt32Integers = protocolTftpSessionWrite200ApplicationJSONInt32Integers;
        return this;
    }
}