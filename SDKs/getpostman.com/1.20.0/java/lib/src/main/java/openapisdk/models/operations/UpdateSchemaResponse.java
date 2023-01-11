package openapisdk.models.operations;



public class UpdateSchemaResponse {
    public String contentType;
    public UpdateSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateSchema200ApplicationJson updateSchema200ApplicationJSONObject;
    public UpdateSchemaResponse withUpdateSchema200ApplicationJsonObject(UpdateSchema200ApplicationJson updateSchema200ApplicationJSONObject) {
        this.updateSchema200ApplicationJSONObject = updateSchema200ApplicationJSONObject;
        return this;
    }
}