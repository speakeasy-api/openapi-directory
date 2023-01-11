package openapisdk.models.operations;



public class PostImageActionResponse {
    public String contentType;
    public PostImageActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostImageActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostImageActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostImageAction401ApplicationJson postImageAction401ApplicationJSONObject;
    public PostImageActionResponse withPostImageAction401ApplicationJsonObject(PostImageAction401ApplicationJson postImageAction401ApplicationJSONObject) {
        this.postImageAction401ApplicationJSONObject = postImageAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PostImageActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
    public PostImageActionResponse withOnev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems(openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems) {
        this.onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
        return this;
    }
}