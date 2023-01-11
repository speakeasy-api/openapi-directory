package openapisdk.models.operations;



public class CreateApiVersionResponse {
    public String contentType;
    public CreateApiVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApiVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateApiVersion200ApplicationJson createApiVersion200ApplicationJSONObject;
    public CreateApiVersionResponse withCreateApiVersion200ApplicationJsonObject(CreateApiVersion200ApplicationJson createApiVersion200ApplicationJSONObject) {
        this.createApiVersion200ApplicationJSONObject = createApiVersion200ApplicationJSONObject;
        return this;
    }
}