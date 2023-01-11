package openapisdk.models.operations;



public class AssignProjectResourcesResponse {
    public String contentType;
    public AssignProjectResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AssignProjectResourcesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AssignProjectResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AssignProjectResources200ApplicationJson assignProjectResources200ApplicationJSONObject;
    public AssignProjectResourcesResponse withAssignProjectResources200ApplicationJsonObject(AssignProjectResources200ApplicationJson assignProjectResources200ApplicationJSONObject) {
        this.assignProjectResources200ApplicationJSONObject = assignProjectResources200ApplicationJSONObject;
        return this;
    }
    public AssignProjectResources401ApplicationJson assignProjectResources401ApplicationJSONObject;
    public AssignProjectResourcesResponse withAssignProjectResources401ApplicationJsonObject(AssignProjectResources401ApplicationJson assignProjectResources401ApplicationJSONObject) {
        this.assignProjectResources401ApplicationJSONObject = assignProjectResources401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AssignProjectResourcesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}