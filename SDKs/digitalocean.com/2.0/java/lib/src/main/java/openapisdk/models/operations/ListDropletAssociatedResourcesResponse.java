package openapisdk.models.operations;



public class ListDropletAssociatedResourcesResponse {
    public String contentType;
    public ListDropletAssociatedResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDropletAssociatedResourcesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDropletAssociatedResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDropletAssociatedResources200ApplicationJson listDropletAssociatedResources200ApplicationJSONObject;
    public ListDropletAssociatedResourcesResponse withListDropletAssociatedResources200ApplicationJsonObject(ListDropletAssociatedResources200ApplicationJson listDropletAssociatedResources200ApplicationJSONObject) {
        this.listDropletAssociatedResources200ApplicationJSONObject = listDropletAssociatedResources200ApplicationJSONObject;
        return this;
    }
    public ListDropletAssociatedResources401ApplicationJson listDropletAssociatedResources401ApplicationJSONObject;
    public ListDropletAssociatedResourcesResponse withListDropletAssociatedResources401ApplicationJsonObject(ListDropletAssociatedResources401ApplicationJson listDropletAssociatedResources401ApplicationJSONObject) {
        this.listDropletAssociatedResources401ApplicationJSONObject = listDropletAssociatedResources401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDropletAssociatedResourcesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}