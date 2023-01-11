package openapisdk.models.operations;



public class DatabaseGetDocumentResponse {
    public String contentType;
    public DatabaseGetDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatabaseGetDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> document;
    public DatabaseGetDocumentResponse withDocument(java.util.Map<String, Object> document) {
        this.document = document;
        return this;
    }
}