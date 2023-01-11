package openapisdk.models.operations;



public class ValidateRegistryNameResponse {
    public String contentType;
    public ValidateRegistryNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ValidateRegistryNameResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ValidateRegistryNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ValidateRegistryName401ApplicationJson validateRegistryName401ApplicationJSONObject;
    public ValidateRegistryNameResponse withValidateRegistryName401ApplicationJsonObject(ValidateRegistryName401ApplicationJson validateRegistryName401ApplicationJSONObject) {
        this.validateRegistryName401ApplicationJSONObject = validateRegistryName401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ValidateRegistryNameResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}