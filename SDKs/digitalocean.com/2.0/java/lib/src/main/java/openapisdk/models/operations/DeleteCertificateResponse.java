package openapisdk.models.operations;



public class DeleteCertificateResponse {
    public String contentType;
    public DeleteCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteCertificateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteCertificate401ApplicationJson deleteCertificate401ApplicationJSONObject;
    public DeleteCertificateResponse withDeleteCertificate401ApplicationJsonObject(DeleteCertificate401ApplicationJson deleteCertificate401ApplicationJSONObject) {
        this.deleteCertificate401ApplicationJSONObject = deleteCertificate401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteCertificateResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}