package openapisdk.models.operations;



public class GetSqlModeResponse {
    public String contentType;
    public GetSqlModeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetSqlModeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetSqlModeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSqlMode200ApplicationJson getSqlMode200ApplicationJSONObject;
    public GetSqlModeResponse withGetSqlMode200ApplicationJsonObject(GetSqlMode200ApplicationJson getSqlMode200ApplicationJSONObject) {
        this.getSqlMode200ApplicationJSONObject = getSqlMode200ApplicationJSONObject;
        return this;
    }
    public GetSqlMode401ApplicationJson getSqlMode401ApplicationJSONObject;
    public GetSqlModeResponse withGetSqlMode401ApplicationJsonObject(GetSqlMode401ApplicationJson getSqlMode401ApplicationJSONObject) {
        this.getSqlMode401ApplicationJSONObject = getSqlMode401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetSqlModeResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}