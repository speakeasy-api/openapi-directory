package openapisdk.models.operations;



public class ListCertificatesResponse {
    public String contentType;
    public ListCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListCertificatesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListCertificates200ApplicationJson listCertificates200ApplicationJSONObject;
    public ListCertificatesResponse withListCertificates200ApplicationJsonObject(ListCertificates200ApplicationJson listCertificates200ApplicationJSONObject) {
        this.listCertificates200ApplicationJSONObject = listCertificates200ApplicationJSONObject;
        return this;
    }
    public ListCertificates401ApplicationJson listCertificates401ApplicationJSONObject;
    public ListCertificatesResponse withListCertificates401ApplicationJsonObject(ListCertificates401ApplicationJson listCertificates401ApplicationJSONObject) {
        this.listCertificates401ApplicationJSONObject = listCertificates401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListCertificatesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}