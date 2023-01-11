package openapisdk.models.operations;



public class ListRepositoryTagsResponse {
    public String contentType;
    public ListRepositoryTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListRepositoryTagsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListRepositoryTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListRepositoryTags200ApplicationJson listRepositoryTags200ApplicationJSONObject;
    public ListRepositoryTagsResponse withListRepositoryTags200ApplicationJsonObject(ListRepositoryTags200ApplicationJson listRepositoryTags200ApplicationJSONObject) {
        this.listRepositoryTags200ApplicationJSONObject = listRepositoryTags200ApplicationJSONObject;
        return this;
    }
    public ListRepositoryTags401ApplicationJson listRepositoryTags401ApplicationJSONObject;
    public ListRepositoryTagsResponse withListRepositoryTags401ApplicationJsonObject(ListRepositoryTags401ApplicationJson listRepositoryTags401ApplicationJSONObject) {
        this.listRepositoryTags401ApplicationJSONObject = listRepositoryTags401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListRepositoryTagsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}