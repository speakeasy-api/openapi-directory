package openapisdk.models.operations;



public class GetImageActionResponse {
    public String contentType;
    public GetImageActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetImageActionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetImageActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetImageAction401ApplicationJson getImageAction401ApplicationJSONObject;
    public GetImageActionResponse withGetImageAction401ApplicationJsonObject(GetImageAction401ApplicationJson getImageAction401ApplicationJSONObject) {
        this.getImageAction401ApplicationJSONObject = getImageAction401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetImageActionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
    public GetImageActionResponse withOnev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems(openapisdk.models.shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems) {
        this.onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems = onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems;
        return this;
    }
}