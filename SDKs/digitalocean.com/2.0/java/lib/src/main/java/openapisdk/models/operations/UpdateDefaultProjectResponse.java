package openapisdk.models.operations;



public class UpdateDefaultProjectResponse {
    public String contentType;
    public UpdateDefaultProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateDefaultProjectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateDefaultProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateDefaultProject200ApplicationJSONAny;
    public UpdateDefaultProjectResponse withUpdateDefaultProject200ApplicationJsonAny(Object updateDefaultProject200ApplicationJSONAny) {
        this.updateDefaultProject200ApplicationJSONAny = updateDefaultProject200ApplicationJSONAny;
        return this;
    }
    public UpdateDefaultProject401ApplicationJson updateDefaultProject401ApplicationJSONObject;
    public UpdateDefaultProjectResponse withUpdateDefaultProject401ApplicationJsonObject(UpdateDefaultProject401ApplicationJson updateDefaultProject401ApplicationJSONObject) {
        this.updateDefaultProject401ApplicationJSONObject = updateDefaultProject401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateDefaultProjectResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}