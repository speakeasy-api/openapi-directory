package openapisdk.models.operations;



public class GetInvoiceByUuidResponse {
    public String contentType;
    public GetInvoiceByUuidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInvoiceByUuidResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInvoiceByUuidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetInvoiceByUuid200ApplicationJson getInvoiceByUuid200ApplicationJSONObject;
    public GetInvoiceByUuidResponse withGetInvoiceByUuid200ApplicationJsonObject(GetInvoiceByUuid200ApplicationJson getInvoiceByUuid200ApplicationJSONObject) {
        this.getInvoiceByUuid200ApplicationJSONObject = getInvoiceByUuid200ApplicationJSONObject;
        return this;
    }
    public GetInvoiceByUuid401ApplicationJson getInvoiceByUuid401ApplicationJSONObject;
    public GetInvoiceByUuidResponse withGetInvoiceByUuid401ApplicationJsonObject(GetInvoiceByUuid401ApplicationJson getInvoiceByUuid401ApplicationJSONObject) {
        this.getInvoiceByUuid401ApplicationJSONObject = getInvoiceByUuid401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetInvoiceByUuidResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}