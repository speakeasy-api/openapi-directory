package openapisdk.models.operations;



public class MetaRootResponse {
    public String contentType;
    public MetaRootResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MetaRootResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MetaRoot200ApplicationJson metaRoot200ApplicationJSONObject;
    public MetaRootResponse withMetaRoot200ApplicationJsonObject(MetaRoot200ApplicationJson metaRoot200ApplicationJSONObject) {
        this.metaRoot200ApplicationJSONObject = metaRoot200ApplicationJSONObject;
        return this;
    }
}