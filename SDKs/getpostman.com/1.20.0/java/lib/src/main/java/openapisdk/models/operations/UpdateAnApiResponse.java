package openapisdk.models.operations;



public class UpdateAnApiResponse {
    public String contentType;
    public UpdateAnApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAnApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateAnApi200ApplicationJson updateAnApi200ApplicationJSONObject;
    public UpdateAnApiResponse withUpdateAnApi200ApplicationJsonObject(UpdateAnApi200ApplicationJson updateAnApi200ApplicationJSONObject) {
        this.updateAnApi200ApplicationJSONObject = updateAnApi200ApplicationJSONObject;
        return this;
    }
}