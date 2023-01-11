package openapisdk.models.operations;



public class DestroyWithAssociatedResourcesSelectiveResponse {
    public String contentType;
    public DestroyWithAssociatedResourcesSelectiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyWithAssociatedResourcesSelectiveResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyWithAssociatedResourcesSelectiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyWithAssociatedResourcesSelective401ApplicationJson destroyWithAssociatedResourcesSelective401ApplicationJSONObject;
    public DestroyWithAssociatedResourcesSelectiveResponse withDestroyWithAssociatedResourcesSelective401ApplicationJsonObject(DestroyWithAssociatedResourcesSelective401ApplicationJson destroyWithAssociatedResourcesSelective401ApplicationJSONObject) {
        this.destroyWithAssociatedResourcesSelective401ApplicationJSONObject = destroyWithAssociatedResourcesSelective401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyWithAssociatedResourcesSelectiveResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}