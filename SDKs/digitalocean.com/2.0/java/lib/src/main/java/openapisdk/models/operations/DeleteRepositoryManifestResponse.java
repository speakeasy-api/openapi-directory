package openapisdk.models.operations;



public class DeleteRepositoryManifestResponse {
    public String contentType;
    public DeleteRepositoryManifestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteRepositoryManifestResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryManifestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteRepositoryManifest401ApplicationJson deleteRepositoryManifest401ApplicationJSONObject;
    public DeleteRepositoryManifestResponse withDeleteRepositoryManifest401ApplicationJsonObject(DeleteRepositoryManifest401ApplicationJson deleteRepositoryManifest401ApplicationJSONObject) {
        this.deleteRepositoryManifest401ApplicationJSONObject = deleteRepositoryManifest401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteRepositoryManifestResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}