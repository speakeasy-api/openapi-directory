package openapisdk.models.operations;



public class ListDatabaseClustersResponse {
    public String contentType;
    public ListDatabaseClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListDatabaseClustersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListDatabaseClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object listDatabaseClusters200ApplicationJSONAny;
    public ListDatabaseClustersResponse withListDatabaseClusters200ApplicationJsonAny(Object listDatabaseClusters200ApplicationJSONAny) {
        this.listDatabaseClusters200ApplicationJSONAny = listDatabaseClusters200ApplicationJSONAny;
        return this;
    }
    public ListDatabaseClusters401ApplicationJson listDatabaseClusters401ApplicationJSONObject;
    public ListDatabaseClustersResponse withListDatabaseClusters401ApplicationJsonObject(ListDatabaseClusters401ApplicationJson listDatabaseClusters401ApplicationJSONObject) {
        this.listDatabaseClusters401ApplicationJSONObject = listDatabaseClusters401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListDatabaseClustersResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}