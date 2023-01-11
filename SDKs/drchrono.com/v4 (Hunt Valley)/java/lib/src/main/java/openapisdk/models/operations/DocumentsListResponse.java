package openapisdk.models.operations;



public class DocumentsListResponse {
    public String contentType;
    public DocumentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DocumentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DocumentsList200ApplicationJson documentsList200ApplicationJSONObject;
    public DocumentsListResponse withDocumentsList200ApplicationJsonObject(DocumentsList200ApplicationJson documentsList200ApplicationJSONObject) {
        this.documentsList200ApplicationJSONObject = documentsList200ApplicationJSONObject;
        return this;
    }
}