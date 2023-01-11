package openapisdk.models.operations;



public class CreateCollectionFromSchemaResponse {
    public String contentType;
    public CreateCollectionFromSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateCollectionFromSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateCollectionFromSchema200ApplicationJson createCollectionFromSchema200ApplicationJSONObject;
    public CreateCollectionFromSchemaResponse withCreateCollectionFromSchema200ApplicationJsonObject(CreateCollectionFromSchema200ApplicationJson createCollectionFromSchema200ApplicationJSONObject) {
        this.createCollectionFromSchema200ApplicationJSONObject = createCollectionFromSchema200ApplicationJSONObject;
        return this;
    }
}