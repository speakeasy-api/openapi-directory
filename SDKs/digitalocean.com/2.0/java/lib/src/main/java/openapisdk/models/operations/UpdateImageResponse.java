package openapisdk.models.operations;



public class UpdateImageResponse {
    public String contentType;
    public UpdateImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateImageResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateImage200ApplicationJson updateImage200ApplicationJSONObject;
    public UpdateImageResponse withUpdateImage200ApplicationJsonObject(UpdateImage200ApplicationJson updateImage200ApplicationJSONObject) {
        this.updateImage200ApplicationJSONObject = updateImage200ApplicationJSONObject;
        return this;
    }
    public UpdateImage401ApplicationJson updateImage401ApplicationJSONObject;
    public UpdateImageResponse withUpdateImage401ApplicationJsonObject(UpdateImage401ApplicationJson updateImage401ApplicationJSONObject) {
        this.updateImage401ApplicationJSONObject = updateImage401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateImageResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}