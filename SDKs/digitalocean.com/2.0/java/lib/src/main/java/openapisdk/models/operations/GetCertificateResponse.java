package openapisdk.models.operations;



public class GetCertificateResponse {
    public String contentType;
    public GetCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCertificateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCertificate200ApplicationJson getCertificate200ApplicationJSONObject;
    public GetCertificateResponse withGetCertificate200ApplicationJsonObject(GetCertificate200ApplicationJson getCertificate200ApplicationJSONObject) {
        this.getCertificate200ApplicationJSONObject = getCertificate200ApplicationJSONObject;
        return this;
    }
    public GetCertificate401ApplicationJson getCertificate401ApplicationJSONObject;
    public GetCertificateResponse withGetCertificate401ApplicationJsonObject(GetCertificate401ApplicationJson getCertificate401ApplicationJSONObject) {
        this.getCertificate401ApplicationJSONObject = getCertificate401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetCertificateResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}