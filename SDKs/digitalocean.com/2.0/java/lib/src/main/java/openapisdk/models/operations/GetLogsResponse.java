package openapisdk.models.operations;



public class GetLogsResponse {
    public String contentType;
    public GetLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetLogsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLogs200ApplicationJson getLogs200ApplicationJSONObject;
    public GetLogsResponse withGetLogs200ApplicationJsonObject(GetLogs200ApplicationJson getLogs200ApplicationJSONObject) {
        this.getLogs200ApplicationJSONObject = getLogs200ApplicationJSONObject;
        return this;
    }
    public GetLogs401ApplicationJson getLogs401ApplicationJSONObject;
    public GetLogsResponse withGetLogs401ApplicationJsonObject(GetLogs401ApplicationJson getLogs401ApplicationJSONObject) {
        this.getLogs401ApplicationJSONObject = getLogs401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetLogsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}