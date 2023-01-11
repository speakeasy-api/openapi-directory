package openapisdk.models.operations;



public class GetAppResponse {
    public String contentType;
    public GetAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAppResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetApp401ApplicationJson getApp401ApplicationJSONObject;
    public GetAppResponse withGetApp401ApplicationJsonObject(GetApp401ApplicationJson getApp401ApplicationJSONObject) {
        this.getApp401ApplicationJSONObject = getApp401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetAppResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21appsPostResponses200ContentApplication1jsonSchema onev21appsPostResponses200ContentApplication1jsonSchema;
    public GetAppResponse withOnev21appsPostResponses200ContentApplication1jsonSchema(openapisdk.models.shared.Onev21appsPostResponses200ContentApplication1jsonSchema onev21appsPostResponses200ContentApplication1jsonSchema) {
        this.onev21appsPostResponses200ContentApplication1jsonSchema = onev21appsPostResponses200ContentApplication1jsonSchema;
        return this;
    }
}