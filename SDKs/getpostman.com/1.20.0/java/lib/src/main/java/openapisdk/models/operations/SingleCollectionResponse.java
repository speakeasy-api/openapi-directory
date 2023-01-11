package openapisdk.models.operations;



public class SingleCollectionResponse {
    public String contentType;
    public SingleCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SingleCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SingleCollection200ApplicationJson singleCollection200ApplicationJSONObject;
    public SingleCollectionResponse withSingleCollection200ApplicationJsonObject(SingleCollection200ApplicationJson singleCollection200ApplicationJSONObject) {
        this.singleCollection200ApplicationJSONObject = singleCollection200ApplicationJSONObject;
        return this;
    }
}