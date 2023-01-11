package openapisdk.models.operations;



public class ListAllDropletNeighborsIdsResponse {
    public String contentType;
    public ListAllDropletNeighborsIdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllDropletNeighborsIdsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllDropletNeighborsIdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllDropletNeighborsIds200ApplicationJson listAllDropletNeighborsIds200ApplicationJSONObject;
    public ListAllDropletNeighborsIdsResponse withListAllDropletNeighborsIds200ApplicationJsonObject(ListAllDropletNeighborsIds200ApplicationJson listAllDropletNeighborsIds200ApplicationJSONObject) {
        this.listAllDropletNeighborsIds200ApplicationJSONObject = listAllDropletNeighborsIds200ApplicationJSONObject;
        return this;
    }
    public ListAllDropletNeighborsIds401ApplicationJson listAllDropletNeighborsIds401ApplicationJSONObject;
    public ListAllDropletNeighborsIdsResponse withListAllDropletNeighborsIds401ApplicationJsonObject(ListAllDropletNeighborsIds401ApplicationJson listAllDropletNeighborsIds401ApplicationJSONObject) {
        this.listAllDropletNeighborsIds401ApplicationJSONObject = listAllDropletNeighborsIds401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllDropletNeighborsIdsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}