package openapisdk.models.operations;



public class CreateProjectResponse {
    public String contentType;
    public CreateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateProjectResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createProject201ApplicationJSONAny;
    public CreateProjectResponse withCreateProject201ApplicationJsonAny(Object createProject201ApplicationJSONAny) {
        this.createProject201ApplicationJSONAny = createProject201ApplicationJSONAny;
        return this;
    }
    public CreateProject401ApplicationJson createProject401ApplicationJSONObject;
    public CreateProjectResponse withCreateProject401ApplicationJsonObject(CreateProject401ApplicationJson createProject401ApplicationJSONObject) {
        this.createProject401ApplicationJSONObject = createProject401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateProjectResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}