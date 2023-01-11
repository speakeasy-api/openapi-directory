package openapisdk.models.operations;



public class DatabaseCreateDocumentResponse {
    public String contentType;
    public DatabaseCreateDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatabaseCreateDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> document;
    public DatabaseCreateDocumentResponse withDocument(java.util.Map<String, Object> document) {
        this.document = document;
        return this;
    }
}