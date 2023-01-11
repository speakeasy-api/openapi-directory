package openapisdk.models.operations;



public class CreateCertificatesResponse {
    public String contentType;
    public CreateCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateCertificatesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateCertificates201ApplicationJson createCertificates201ApplicationJSONObject;
    public CreateCertificatesResponse withCreateCertificates201ApplicationJsonObject(CreateCertificates201ApplicationJson createCertificates201ApplicationJSONObject) {
        this.createCertificates201ApplicationJSONObject = createCertificates201ApplicationJSONObject;
        return this;
    }
    public CreateCertificates401ApplicationJson createCertificates401ApplicationJSONObject;
    public CreateCertificatesResponse withCreateCertificates401ApplicationJsonObject(CreateCertificates401ApplicationJson createCertificates401ApplicationJSONObject) {
        this.createCertificates401ApplicationJSONObject = createCertificates401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateCertificatesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}