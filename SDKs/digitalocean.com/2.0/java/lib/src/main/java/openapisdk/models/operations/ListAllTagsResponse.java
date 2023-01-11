package openapisdk.models.operations;



public class ListAllTagsResponse {
    public String contentType;
    public ListAllTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListAllTagsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListAllTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAllTags200ApplicationJson listAllTags200ApplicationJSONObject;
    public ListAllTagsResponse withListAllTags200ApplicationJsonObject(ListAllTags200ApplicationJson listAllTags200ApplicationJSONObject) {
        this.listAllTags200ApplicationJSONObject = listAllTags200ApplicationJSONObject;
        return this;
    }
    public ListAllTags401ApplicationJson listAllTags401ApplicationJSONObject;
    public ListAllTagsResponse withListAllTags401ApplicationJsonObject(ListAllTags401ApplicationJson listAllTags401ApplicationJSONObject) {
        this.listAllTags401ApplicationJSONObject = listAllTags401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListAllTagsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}