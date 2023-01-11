package openapisdk.models.operations;



public class GetDropletFilesystemFreeMetricsResponse {
    public String contentType;
    public GetDropletFilesystemFreeMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletFilesystemFreeMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletFilesystemFreeMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletFilesystemFreeMetrics200ApplicationJson getDropletFilesystemFreeMetrics200ApplicationJSONObject;
    public GetDropletFilesystemFreeMetricsResponse withGetDropletFilesystemFreeMetrics200ApplicationJsonObject(GetDropletFilesystemFreeMetrics200ApplicationJson getDropletFilesystemFreeMetrics200ApplicationJSONObject) {
        this.getDropletFilesystemFreeMetrics200ApplicationJSONObject = getDropletFilesystemFreeMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletFilesystemFreeMetrics401ApplicationJson getDropletFilesystemFreeMetrics401ApplicationJSONObject;
    public GetDropletFilesystemFreeMetricsResponse withGetDropletFilesystemFreeMetrics401ApplicationJsonObject(GetDropletFilesystemFreeMetrics401ApplicationJson getDropletFilesystemFreeMetrics401ApplicationJSONObject) {
        this.getDropletFilesystemFreeMetrics401ApplicationJSONObject = getDropletFilesystemFreeMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletFilesystemFreeMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}