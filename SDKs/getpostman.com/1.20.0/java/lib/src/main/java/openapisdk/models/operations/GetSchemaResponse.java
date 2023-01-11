package openapisdk.models.operations;



public class GetSchemaResponse {
    public String contentType;
    public GetSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSchema200ApplicationJson getSchema200ApplicationJSONObject;
    public GetSchemaResponse withGetSchema200ApplicationJsonObject(GetSchema200ApplicationJson getSchema200ApplicationJSONObject) {
        this.getSchema200ApplicationJSONObject = getSchema200ApplicationJSONObject;
        return this;
    }
}