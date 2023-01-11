package openapisdk.models.operations;



public class DeleteDomainRecordResponse {
    public String contentType;
    public DeleteDomainRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteDomainRecordResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteDomainRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteDomainRecord401ApplicationJson deleteDomainRecord401ApplicationJSONObject;
    public DeleteDomainRecordResponse withDeleteDomainRecord401ApplicationJsonObject(DeleteDomainRecord401ApplicationJson deleteDomainRecord401ApplicationJSONObject) {
        this.deleteDomainRecord401ApplicationJSONObject = deleteDomainRecord401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteDomainRecordResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}