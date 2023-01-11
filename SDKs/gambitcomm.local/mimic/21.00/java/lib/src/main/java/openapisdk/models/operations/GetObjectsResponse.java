package openapisdk.models.operations;



public class GetObjectsResponse {
    public String contentType;
    public GetObjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetObjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getObjects200ApplicationJSONStrings;
    public GetObjectsResponse withGetObjects200ApplicationJsonStrings(String[] getObjects200ApplicationJSONStrings) {
        this.getObjects200ApplicationJSONStrings = getObjects200ApplicationJSONStrings;
        return this;
    }
}