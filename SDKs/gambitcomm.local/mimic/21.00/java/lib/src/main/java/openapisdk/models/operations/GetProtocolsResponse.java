package openapisdk.models.operations;



public class GetProtocolsResponse {
    public String contentType;
    public GetProtocolsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProtocolsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getProtocols200ApplicationJSONStrings;
    public GetProtocolsResponse withGetProtocols200ApplicationJsonStrings(String[] getProtocols200ApplicationJSONStrings) {
        this.getProtocols200ApplicationJSONStrings = getProtocols200ApplicationJSONStrings;
        return this;
    }
}