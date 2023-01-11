package openapisdk.models.operations;



public class DeleteAnApiVersionResponse {
    public String contentType;
    public DeleteAnApiVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAnApiVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteAnApiVersion200ApplicationJson deleteAnApiVersion200ApplicationJSONObject;
    public DeleteAnApiVersionResponse withDeleteAnApiVersion200ApplicationJsonObject(DeleteAnApiVersion200ApplicationJson deleteAnApiVersion200ApplicationJSONObject) {
        this.deleteAnApiVersion200ApplicationJSONObject = deleteAnApiVersion200ApplicationJSONObject;
        return this;
    }
}