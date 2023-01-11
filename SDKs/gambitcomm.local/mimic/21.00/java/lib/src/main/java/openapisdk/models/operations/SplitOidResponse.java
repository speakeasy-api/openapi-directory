package openapisdk.models.operations;



public class SplitOidResponse {
    public String contentType;
    public SplitOidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SplitOidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] splitOid200ApplicationJSONStrings;
    public SplitOidResponse withSplitOid200ApplicationJsonStrings(String[] splitOid200ApplicationJSONStrings) {
        this.splitOid200ApplicationJSONStrings = splitOid200ApplicationJSONStrings;
        return this;
    }
}