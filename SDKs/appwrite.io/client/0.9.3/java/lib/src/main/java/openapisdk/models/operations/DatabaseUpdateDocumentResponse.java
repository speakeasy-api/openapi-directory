package openapisdk.models.operations;



public class DatabaseUpdateDocumentResponse {
    public String contentType;
    public DatabaseUpdateDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatabaseUpdateDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> document;
    public DatabaseUpdateDocumentResponse withDocument(java.util.Map<String, Object> document) {
        this.document = document;
        return this;
    }
}