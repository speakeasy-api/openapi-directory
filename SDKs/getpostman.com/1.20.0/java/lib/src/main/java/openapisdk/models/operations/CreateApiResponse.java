package openapisdk.models.operations;



public class CreateApiResponse {
    public String contentType;
    public CreateApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateApi200ApplicationJson createApi200ApplicationJSONObject;
    public CreateApiResponse withCreateApi200ApplicationJsonObject(CreateApi200ApplicationJson createApi200ApplicationJSONObject) {
        this.createApi200ApplicationJSONObject = createApi200ApplicationJSONObject;
        return this;
    }
}