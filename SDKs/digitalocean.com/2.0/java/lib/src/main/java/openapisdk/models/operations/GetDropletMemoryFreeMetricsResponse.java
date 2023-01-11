package openapisdk.models.operations;



public class GetDropletMemoryFreeMetricsResponse {
    public String contentType;
    public GetDropletMemoryFreeMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletMemoryFreeMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletMemoryFreeMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletMemoryFreeMetrics200ApplicationJson getDropletMemoryFreeMetrics200ApplicationJSONObject;
    public GetDropletMemoryFreeMetricsResponse withGetDropletMemoryFreeMetrics200ApplicationJsonObject(GetDropletMemoryFreeMetrics200ApplicationJson getDropletMemoryFreeMetrics200ApplicationJSONObject) {
        this.getDropletMemoryFreeMetrics200ApplicationJSONObject = getDropletMemoryFreeMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletMemoryFreeMetrics401ApplicationJson getDropletMemoryFreeMetrics401ApplicationJSONObject;
    public GetDropletMemoryFreeMetricsResponse withGetDropletMemoryFreeMetrics401ApplicationJsonObject(GetDropletMemoryFreeMetrics401ApplicationJson getDropletMemoryFreeMetrics401ApplicationJSONObject) {
        this.getDropletMemoryFreeMetrics401ApplicationJSONObject = getDropletMemoryFreeMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletMemoryFreeMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}