package openapisdk.models.operations;



public class UpdateProjectResponse {
    public String contentType;
    public UpdateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateProjectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateProject200ApplicationJSONAny;
    public UpdateProjectResponse withUpdateProject200ApplicationJsonAny(Object updateProject200ApplicationJSONAny) {
        this.updateProject200ApplicationJSONAny = updateProject200ApplicationJSONAny;
        return this;
    }
    public UpdateProject401ApplicationJson updateProject401ApplicationJSONObject;
    public UpdateProjectResponse withUpdateProject401ApplicationJsonObject(UpdateProject401ApplicationJson updateProject401ApplicationJSONObject) {
        this.updateProject401ApplicationJSONObject = updateProject401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateProjectResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}