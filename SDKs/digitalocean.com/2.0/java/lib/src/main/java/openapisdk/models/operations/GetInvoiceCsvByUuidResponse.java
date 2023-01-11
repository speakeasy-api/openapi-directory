package openapisdk.models.operations;



public class GetInvoiceCsvByUuidResponse {
    public String contentType;
    public GetInvoiceCsvByUuidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInvoiceCsvByUuidResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInvoiceCsvByUuidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getInvoiceCsvByUuid200TextCsvString;
    public GetInvoiceCsvByUuidResponse withGetInvoiceCsvByUuid200TextCsvString(String getInvoiceCsvByUuid200TextCsvString) {
        this.getInvoiceCsvByUuid200TextCsvString = getInvoiceCsvByUuid200TextCsvString;
        return this;
    }
    public GetInvoiceCsvByUuid401ApplicationJson getInvoiceCsvByUuid401ApplicationJSONObject;
    public GetInvoiceCsvByUuidResponse withGetInvoiceCsvByUuid401ApplicationJsonObject(GetInvoiceCsvByUuid401ApplicationJson getInvoiceCsvByUuid401ApplicationJSONObject) {
        this.getInvoiceCsvByUuid401ApplicationJSONObject = getInvoiceCsvByUuid401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetInvoiceCsvByUuidResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}