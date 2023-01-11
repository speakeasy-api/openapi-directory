package openapisdk.models.operations;



public class EobsListResponse {
    public String contentType;
    public EobsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EobsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EobsList200ApplicationJson eobsList200ApplicationJSONObject;
    public EobsListResponse withEobsList200ApplicationJsonObject(EobsList200ApplicationJson eobsList200ApplicationJSONObject) {
        this.eobsList200ApplicationJSONObject = eobsList200ApplicationJSONObject;
        return this;
    }
}