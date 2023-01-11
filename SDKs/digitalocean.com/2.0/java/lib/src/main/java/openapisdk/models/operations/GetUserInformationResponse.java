package openapisdk.models.operations;



public class GetUserInformationResponse {
    public String contentType;
    public GetUserInformationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetUserInformationResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetUserInformationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getUserInformation200ApplicationJSONAny;
    public GetUserInformationResponse withGetUserInformation200ApplicationJsonAny(Object getUserInformation200ApplicationJSONAny) {
        this.getUserInformation200ApplicationJSONAny = getUserInformation200ApplicationJSONAny;
        return this;
    }
    public GetUserInformation401ApplicationJson getUserInformation401ApplicationJSONObject;
    public GetUserInformationResponse withGetUserInformation401ApplicationJsonObject(GetUserInformation401ApplicationJson getUserInformation401ApplicationJSONObject) {
        this.getUserInformation401ApplicationJSONObject = getUserInformation401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetUserInformationResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}