package openapisdk.models.operations;



public class UpdateAnApiVersionResponse {
    public String contentType;
    public UpdateAnApiVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateAnApiVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateAnApiVersion200ApplicationJson updateAnApiVersion200ApplicationJSONObject;
    public UpdateAnApiVersionResponse withUpdateAnApiVersion200ApplicationJsonObject(UpdateAnApiVersion200ApplicationJson updateAnApiVersion200ApplicationJSONObject) {
        this.updateAnApiVersion200ApplicationJSONObject = updateAnApiVersion200ApplicationJSONObject;
        return this;
    }
}