package openapisdk.models.operations;



public class SetProtocolsResponse {
    public String contentType;
    public SetProtocolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetProtocolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Long[] setProtocols200ApplicationJSONStringIntegers;
    public SetProtocolsResponse withSetProtocols200ApplicationJsonStringIntegers(Long[] setProtocols200ApplicationJSONStringIntegers) {
        this.setProtocols200ApplicationJSONStringIntegers = setProtocols200ApplicationJSONStringIntegers;
        return this;
    }
}