package openapisdk.models.operations;



public class GetDropletCpuMetricsResponse {
    public String contentType;
    public GetDropletCpuMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletCpuMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletCpuMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletCpuMetrics200ApplicationJson getDropletCpuMetrics200ApplicationJSONObject;
    public GetDropletCpuMetricsResponse withGetDropletCpuMetrics200ApplicationJsonObject(GetDropletCpuMetrics200ApplicationJson getDropletCpuMetrics200ApplicationJSONObject) {
        this.getDropletCpuMetrics200ApplicationJSONObject = getDropletCpuMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletCpuMetrics401ApplicationJson getDropletCpuMetrics401ApplicationJSONObject;
    public GetDropletCpuMetricsResponse withGetDropletCpuMetrics401ApplicationJsonObject(GetDropletCpuMetrics401ApplicationJson getDropletCpuMetrics401ApplicationJSONObject) {
        this.getDropletCpuMetrics401ApplicationJSONObject = getDropletCpuMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletCpuMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}