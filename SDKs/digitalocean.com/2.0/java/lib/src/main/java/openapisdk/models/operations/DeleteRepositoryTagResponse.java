package openapisdk.models.operations;



public class DeleteRepositoryTagResponse {
    public String contentType;
    public DeleteRepositoryTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteRepositoryTagResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteRepositoryTag401ApplicationJson deleteRepositoryTag401ApplicationJSONObject;
    public DeleteRepositoryTagResponse withDeleteRepositoryTag401ApplicationJsonObject(DeleteRepositoryTag401ApplicationJson deleteRepositoryTag401ApplicationJSONObject) {
        this.deleteRepositoryTag401ApplicationJSONObject = deleteRepositoryTag401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteRepositoryTagResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}