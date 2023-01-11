package openapisdk.models.operations;



public class DeleteAlertPolicyResponse {
    public String contentType;
    public DeleteAlertPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteAlertPolicyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteAlertPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteAlertPolicy401ApplicationJson deleteAlertPolicy401ApplicationJSONObject;
    public DeleteAlertPolicyResponse withDeleteAlertPolicy401ApplicationJsonObject(DeleteAlertPolicy401ApplicationJson deleteAlertPolicy401ApplicationJSONObject) {
        this.deleteAlertPolicy401ApplicationJSONObject = deleteAlertPolicy401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteAlertPolicyResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}