package openapisdk.models.operations;



public class CreateNewTagResponse {
    public String contentType;
    public CreateNewTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateNewTagResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateNewTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createNewTag201ApplicationJSONAny;
    public CreateNewTagResponse withCreateNewTag201ApplicationJsonAny(Object createNewTag201ApplicationJSONAny) {
        this.createNewTag201ApplicationJSONAny = createNewTag201ApplicationJSONAny;
        return this;
    }
    public CreateNewTag400ApplicationJson createNewTag400ApplicationJSONObject;
    public CreateNewTagResponse withCreateNewTag400ApplicationJsonObject(CreateNewTag400ApplicationJson createNewTag400ApplicationJSONObject) {
        this.createNewTag400ApplicationJSONObject = createNewTag400ApplicationJSONObject;
        return this;
    }
    public CreateNewTag401ApplicationJson createNewTag401ApplicationJSONObject;
    public CreateNewTagResponse withCreateNewTag401ApplicationJsonObject(CreateNewTag401ApplicationJson createNewTag401ApplicationJSONObject) {
        this.createNewTag401ApplicationJSONObject = createNewTag401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateNewTagResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}