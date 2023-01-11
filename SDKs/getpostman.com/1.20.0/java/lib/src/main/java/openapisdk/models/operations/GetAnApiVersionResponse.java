package openapisdk.models.operations;



public class GetAnApiVersionResponse {
    public String contentType;
    public GetAnApiVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAnApiVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAnApiVersion200ApplicationJson getAnApiVersion200ApplicationJSONObject;
    public GetAnApiVersionResponse withGetAnApiVersion200ApplicationJsonObject(GetAnApiVersion200ApplicationJson getAnApiVersion200ApplicationJSONObject) {
        this.getAnApiVersion200ApplicationJSONObject = getAnApiVersion200ApplicationJSONObject;
        return this;
    }
}