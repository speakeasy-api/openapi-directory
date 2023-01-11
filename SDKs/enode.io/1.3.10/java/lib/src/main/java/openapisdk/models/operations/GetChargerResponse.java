package openapisdk.models.operations;



public class GetChargerResponse {
    public String contentType;
    public GetChargerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChargerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCharger200ApplicationJson getCharger200ApplicationJSONObject;
    public GetChargerResponse withGetCharger200ApplicationJsonObject(GetCharger200ApplicationJson getCharger200ApplicationJSONObject) {
        this.getCharger200ApplicationJSONObject = getCharger200ApplicationJSONObject;
        return this;
    }
}