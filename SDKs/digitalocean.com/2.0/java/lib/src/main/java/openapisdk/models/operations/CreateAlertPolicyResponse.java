package openapisdk.models.operations;



public class CreateAlertPolicyResponse {
    public String contentType;
    public CreateAlertPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateAlertPolicyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateAlertPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateAlertPolicy401ApplicationJson createAlertPolicy401ApplicationJSONObject;
    public CreateAlertPolicyResponse withCreateAlertPolicy401ApplicationJsonObject(CreateAlertPolicy401ApplicationJson createAlertPolicy401ApplicationJSONObject) {
        this.createAlertPolicy401ApplicationJSONObject = createAlertPolicy401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateAlertPolicyResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems;
    public CreateAlertPolicyResponse withOnev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems(openapisdk.models.shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems) {
        this.onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems = onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItems;
        return this;
    }
}