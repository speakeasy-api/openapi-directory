package openapisdk.models.operations;



public class ValidateAppSpecResponse {
    public String contentType;
    public ValidateAppSpecResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ValidateAppSpecResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ValidateAppSpecResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ValidateAppSpec200ApplicationJson validateAppSpec200ApplicationJSONObject;
    public ValidateAppSpecResponse withValidateAppSpec200ApplicationJsonObject(ValidateAppSpec200ApplicationJson validateAppSpec200ApplicationJSONObject) {
        this.validateAppSpec200ApplicationJSONObject = validateAppSpec200ApplicationJSONObject;
        return this;
    }
    public ValidateAppSpec401ApplicationJson validateAppSpec401ApplicationJSONObject;
    public ValidateAppSpecResponse withValidateAppSpec401ApplicationJsonObject(ValidateAppSpec401ApplicationJson validateAppSpec401ApplicationJSONObject) {
        this.validateAppSpec401ApplicationJSONObject = validateAppSpec401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ValidateAppSpecResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}