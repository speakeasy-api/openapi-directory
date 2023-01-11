package openapisdk.models.operations;



public class ListDropletKernelsResponse {
    public String contentType;
    public ListDropletKernelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDropletKernelsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDropletKernelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDropletKernels200ApplicationJson listDropletKernels200ApplicationJSONObject;
    public ListDropletKernelsResponse withListDropletKernels200ApplicationJsonObject(ListDropletKernels200ApplicationJson listDropletKernels200ApplicationJSONObject) {
        this.listDropletKernels200ApplicationJSONObject = listDropletKernels200ApplicationJSONObject;
        return this;
    }
    public ListDropletKernels401ApplicationJson listDropletKernels401ApplicationJSONObject;
    public ListDropletKernelsResponse withListDropletKernels401ApplicationJsonObject(ListDropletKernels401ApplicationJson listDropletKernels401ApplicationJSONObject) {
        this.listDropletKernels401ApplicationJSONObject = listDropletKernels401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDropletKernelsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}