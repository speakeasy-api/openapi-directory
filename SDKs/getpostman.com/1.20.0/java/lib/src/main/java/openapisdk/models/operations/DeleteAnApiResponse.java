package openapisdk.models.operations;



public class DeleteAnApiResponse {
    public String contentType;
    public DeleteAnApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAnApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteAnApi200ApplicationJson deleteAnApi200ApplicationJSONObject;
    public DeleteAnApiResponse withDeleteAnApi200ApplicationJsonObject(DeleteAnApi200ApplicationJson deleteAnApi200ApplicationJSONObject) {
        this.deleteAnApi200ApplicationJSONObject = deleteAnApi200ApplicationJSONObject;
        return this;
    }
}