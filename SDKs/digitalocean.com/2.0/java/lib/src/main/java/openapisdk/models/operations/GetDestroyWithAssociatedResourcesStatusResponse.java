package openapisdk.models.operations;



public class GetDestroyWithAssociatedResourcesStatusResponse {
    public String contentType;
    public GetDestroyWithAssociatedResourcesStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDestroyWithAssociatedResourcesStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDestroyWithAssociatedResourcesStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDestroyWithAssociatedResourcesStatus200ApplicationJson getDestroyWithAssociatedResourcesStatus200ApplicationJSONObject;
    public GetDestroyWithAssociatedResourcesStatusResponse withGetDestroyWithAssociatedResourcesStatus200ApplicationJsonObject(GetDestroyWithAssociatedResourcesStatus200ApplicationJson getDestroyWithAssociatedResourcesStatus200ApplicationJSONObject) {
        this.getDestroyWithAssociatedResourcesStatus200ApplicationJSONObject = getDestroyWithAssociatedResourcesStatus200ApplicationJSONObject;
        return this;
    }
    public GetDestroyWithAssociatedResourcesStatus401ApplicationJson getDestroyWithAssociatedResourcesStatus401ApplicationJSONObject;
    public GetDestroyWithAssociatedResourcesStatusResponse withGetDestroyWithAssociatedResourcesStatus401ApplicationJsonObject(GetDestroyWithAssociatedResourcesStatus401ApplicationJson getDestroyWithAssociatedResourcesStatus401ApplicationJSONObject) {
        this.getDestroyWithAssociatedResourcesStatus401ApplicationJSONObject = getDestroyWithAssociatedResourcesStatus401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDestroyWithAssociatedResourcesStatusResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}