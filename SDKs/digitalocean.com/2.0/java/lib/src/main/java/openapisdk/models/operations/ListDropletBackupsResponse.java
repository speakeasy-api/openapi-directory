package openapisdk.models.operations;



public class ListDropletBackupsResponse {
    public String contentType;
    public ListDropletBackupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDropletBackupsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDropletBackupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListDropletBackups200ApplicationJson listDropletBackups200ApplicationJSONObject;
    public ListDropletBackupsResponse withListDropletBackups200ApplicationJsonObject(ListDropletBackups200ApplicationJson listDropletBackups200ApplicationJSONObject) {
        this.listDropletBackups200ApplicationJSONObject = listDropletBackups200ApplicationJSONObject;
        return this;
    }
    public ListDropletBackups401ApplicationJson listDropletBackups401ApplicationJSONObject;
    public ListDropletBackupsResponse withListDropletBackups401ApplicationJsonObject(ListDropletBackups401ApplicationJson listDropletBackups401ApplicationJSONObject) {
        this.listDropletBackups401ApplicationJSONObject = listDropletBackups401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDropletBackupsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}