package openapisdk.models.operations;



public class GetDropletFilesystemSizeMetricsResponse {
    public String contentType;
    public GetDropletFilesystemSizeMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletFilesystemSizeMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletFilesystemSizeMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletFilesystemSizeMetrics200ApplicationJson getDropletFilesystemSizeMetrics200ApplicationJSONObject;
    public GetDropletFilesystemSizeMetricsResponse withGetDropletFilesystemSizeMetrics200ApplicationJsonObject(GetDropletFilesystemSizeMetrics200ApplicationJson getDropletFilesystemSizeMetrics200ApplicationJSONObject) {
        this.getDropletFilesystemSizeMetrics200ApplicationJSONObject = getDropletFilesystemSizeMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletFilesystemSizeMetrics401ApplicationJson getDropletFilesystemSizeMetrics401ApplicationJSONObject;
    public GetDropletFilesystemSizeMetricsResponse withGetDropletFilesystemSizeMetrics401ApplicationJsonObject(GetDropletFilesystemSizeMetrics401ApplicationJson getDropletFilesystemSizeMetrics401ApplicationJSONObject) {
        this.getDropletFilesystemSizeMetrics401ApplicationJSONObject = getDropletFilesystemSizeMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletFilesystemSizeMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}