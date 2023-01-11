package openapisdk.models.operations;



public class UpdateSqlModeResponse {
    public String contentType;
    public UpdateSqlModeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateSqlModeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateSqlModeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateSqlMode401ApplicationJson updateSqlMode401ApplicationJSONObject;
    public UpdateSqlModeResponse withUpdateSqlMode401ApplicationJsonObject(UpdateSqlMode401ApplicationJson updateSqlMode401ApplicationJSONObject) {
        this.updateSqlMode401ApplicationJSONObject = updateSqlMode401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateSqlModeResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}