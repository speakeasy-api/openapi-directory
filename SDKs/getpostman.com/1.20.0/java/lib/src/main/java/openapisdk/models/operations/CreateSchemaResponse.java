package openapisdk.models.operations;



public class CreateSchemaResponse {
    public String contentType;
    public CreateSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateSchema200ApplicationJson createSchema200ApplicationJSONObject;
    public CreateSchemaResponse withCreateSchema200ApplicationJsonObject(CreateSchema200ApplicationJson createSchema200ApplicationJSONObject) {
        this.createSchema200ApplicationJSONObject = createSchema200ApplicationJSONObject;
        return this;
    }
}