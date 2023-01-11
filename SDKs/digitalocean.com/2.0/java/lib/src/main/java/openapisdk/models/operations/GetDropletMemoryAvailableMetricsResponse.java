package openapisdk.models.operations;



public class GetDropletMemoryAvailableMetricsResponse {
    public String contentType;
    public GetDropletMemoryAvailableMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletMemoryAvailableMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletMemoryAvailableMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletMemoryAvailableMetrics200ApplicationJson getDropletMemoryAvailableMetrics200ApplicationJSONObject;
    public GetDropletMemoryAvailableMetricsResponse withGetDropletMemoryAvailableMetrics200ApplicationJsonObject(GetDropletMemoryAvailableMetrics200ApplicationJson getDropletMemoryAvailableMetrics200ApplicationJSONObject) {
        this.getDropletMemoryAvailableMetrics200ApplicationJSONObject = getDropletMemoryAvailableMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletMemoryAvailableMetrics401ApplicationJson getDropletMemoryAvailableMetrics401ApplicationJSONObject;
    public GetDropletMemoryAvailableMetricsResponse withGetDropletMemoryAvailableMetrics401ApplicationJsonObject(GetDropletMemoryAvailableMetrics401ApplicationJson getDropletMemoryAvailableMetrics401ApplicationJSONObject) {
        this.getDropletMemoryAvailableMetrics401ApplicationJSONObject = getDropletMemoryAvailableMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletMemoryAvailableMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}