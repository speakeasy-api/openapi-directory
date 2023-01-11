package openapisdk.models.operations;



public class UpdateAppResponse {
    public String contentType;
    public UpdateAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateAppResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateApp401ApplicationJson updateApp401ApplicationJSONObject;
    public UpdateAppResponse withUpdateApp401ApplicationJsonObject(UpdateApp401ApplicationJson updateApp401ApplicationJSONObject) {
        this.updateApp401ApplicationJSONObject = updateApp401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateAppResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21appsPostResponses200ContentApplication1jsonSchema onev21appsPostResponses200ContentApplication1jsonSchema;
    public UpdateAppResponse withOnev21appsPostResponses200ContentApplication1jsonSchema(openapisdk.models.shared.Onev21appsPostResponses200ContentApplication1jsonSchema onev21appsPostResponses200ContentApplication1jsonSchema) {
        this.onev21appsPostResponses200ContentApplication1jsonSchema = onev21appsPostResponses200ContentApplication1jsonSchema;
        return this;
    }
}