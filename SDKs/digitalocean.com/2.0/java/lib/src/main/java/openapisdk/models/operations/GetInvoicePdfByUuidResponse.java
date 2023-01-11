package openapisdk.models.operations;



public class GetInvoicePdfByUuidResponse {
    public String contentType;
    public GetInvoicePdfByUuidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetInvoicePdfByUuidResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetInvoicePdfByUuidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public byte[] getInvoicePdfByUuid200ApplicationPdfBinaryString;
    public GetInvoicePdfByUuidResponse withGetInvoicePdfByUuid200ApplicationPdfBinaryString(byte[] getInvoicePdfByUuid200ApplicationPdfBinaryString) {
        this.getInvoicePdfByUuid200ApplicationPdfBinaryString = getInvoicePdfByUuid200ApplicationPdfBinaryString;
        return this;
    }
    public GetInvoicePdfByUuid401ApplicationJson getInvoicePdfByUuid401ApplicationJSONObject;
    public GetInvoicePdfByUuidResponse withGetInvoicePdfByUuid401ApplicationJsonObject(GetInvoicePdfByUuid401ApplicationJson getInvoicePdfByUuid401ApplicationJSONObject) {
        this.getInvoicePdfByUuid401ApplicationJSONObject = getInvoicePdfByUuid401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetInvoicePdfByUuidResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}