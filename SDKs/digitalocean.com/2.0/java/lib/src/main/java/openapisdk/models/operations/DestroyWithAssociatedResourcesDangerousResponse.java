package openapisdk.models.operations;



public class DestroyWithAssociatedResourcesDangerousResponse {
    public String contentType;
    public DestroyWithAssociatedResourcesDangerousResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyWithAssociatedResourcesDangerousResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyWithAssociatedResourcesDangerousResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyWithAssociatedResourcesDangerous401ApplicationJson destroyWithAssociatedResourcesDangerous401ApplicationJSONObject;
    public DestroyWithAssociatedResourcesDangerousResponse withDestroyWithAssociatedResourcesDangerous401ApplicationJsonObject(DestroyWithAssociatedResourcesDangerous401ApplicationJson destroyWithAssociatedResourcesDangerous401ApplicationJSONObject) {
        this.destroyWithAssociatedResourcesDangerous401ApplicationJSONObject = destroyWithAssociatedResourcesDangerous401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyWithAssociatedResourcesDangerousResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}