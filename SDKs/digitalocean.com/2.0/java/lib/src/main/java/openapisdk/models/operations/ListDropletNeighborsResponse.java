package openapisdk.models.operations;



public class ListDropletNeighborsResponse {
    public String contentType;
    public ListDropletNeighborsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDropletNeighborsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDropletNeighborsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDropletNeighbors200ApplicationJson listDropletNeighbors200ApplicationJSONObject;
    public ListDropletNeighborsResponse withListDropletNeighbors200ApplicationJsonObject(ListDropletNeighbors200ApplicationJson listDropletNeighbors200ApplicationJSONObject) {
        this.listDropletNeighbors200ApplicationJSONObject = listDropletNeighbors200ApplicationJSONObject;
        return this;
    }
    public ListDropletNeighbors401ApplicationJson listDropletNeighbors401ApplicationJSONObject;
    public ListDropletNeighborsResponse withListDropletNeighbors401ApplicationJsonObject(ListDropletNeighbors401ApplicationJson listDropletNeighbors401ApplicationJSONObject) {
        this.listDropletNeighbors401ApplicationJSONObject = listDropletNeighbors401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDropletNeighborsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}